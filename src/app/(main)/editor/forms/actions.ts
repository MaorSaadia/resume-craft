"use server";

import { auth } from "@clerk/nextjs/server";

import model from "@/lib/gemini";
import { canUseAITools } from "@/lib/permissions";
import { getUserSubscriptionLevel } from "@/lib/subscription";
import {
  GenerateProjectExperienceInput,
  generateProjectExperienceSchema,
  GenerateSummaryInput,
  generateSummarySchema,
  GenerateWorkExperienceInput,
  generateWorkExperienceSchema,
  ProjectExperience,
  WorkExperience,
} from "@/lib/validation";

export async function generateSummary(input: GenerateSummaryInput) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const subscriptionLevel = await getUserSubscriptionLevel(userId);
  if (!canUseAITools(subscriptionLevel)) {
    throw new Error("Upgrade your subscription to use this feature");
  }

  const { jobTitle, workExperiences, educations, skills } =
    generateSummarySchema.parse(input);

  const prompt = `
    You are a job resume generator AI. Your task is to write a professional introduction summary for a resume given the user's provided data.
    Only return the summary and do not include any other information in the response. Keep it concise and professional. 
    Generate a professional resume summary from this data:

    Job title: ${jobTitle || "N/A"}
    Work experience:
    ${workExperiences
      ?.map(
        (exp) => `
        Position: ${exp.position || "N/A"} at ${exp.company || "N/A"} from ${exp.startDate || "N/A"} to ${exp.endDate || "Present"}
        Description: ${exp.description || "N/A"}
        `,
      )
      .join("\n\n")}
    Education:
    ${educations
      ?.map(
        (edu) => `
        Degree: ${edu.degree || "N/A"} at ${edu.school || "N/A"} from ${edu.startDate || "N/A"} to ${edu.endDate || "N/A"}
        `,
      )
      .join("\n\n")}
    Skills: ${skills}
    
    Instructions: Write a concise, professional summary focusing on key achievements and skills,very importent! response with the same data language.
  `;

  try {
    const result = await model.generateContent(prompt);
    const aiResponse = result.response.text();

    if (!aiResponse) {
      throw new Error("Failed to generate AI response");
    }

    return aiResponse;
  } catch (error) {
    console.error("Error generating summary:", error);
    throw error;
  }
}

export async function generateWorkExperience(
  input: GenerateWorkExperienceInput,
) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const subscriptionLevel = await getUserSubscriptionLevel(userId);
  if (!canUseAITools(subscriptionLevel)) {
    throw new Error("Upgrade your subscription to use this feature");
  }

  const { description } = generateWorkExperienceSchema.parse(input);

  const prompt = `
  You are ResumeExpert AI, a specialized professional resume writer with expertise in transforming basic job descriptions into powerful resume entries that highlight achievements and skills.
  
  TASK: Transform the following job description into a structured, achievement-focused work experience entry that will impress recruiters and pass ATS screening.
  
  INPUT: ${description}
  
  OUTPUT FORMAT:
  Job title: [Extract or infer the most impressive version of the role]
  Company: [Extract or infer company name]
  Start date: [YYYY-MM-DD format if provided, otherwise omit]
  End date: [YYYY-MM-DD format if provided or "Present" for current roles, otherwise omit]
  Description: [Transform the input into 3-5 powerful bullet points that:
    • Start with strong action verbs
    • Include metrics and quantifiable achievements where possible (revenue, percentages, team size)
    • Highlight relevant skills and technologies
    • Focus on impact and results, not just responsibilities
    • Are concise (1-2 lines each)
    • Are properly formatted with bullet points (•) and line breaks]
  
  IMPORTANT:
  1. Preserve the original language of the input
  2. Do NOT fabricate specific metrics if not provided
  3. Respond ONLY with the structured content in the exact format specified above
  4. If certain fields cannot be reasonably inferred, leave them blank
  5. Optimize for ATS compatibility by incorporating relevant industry keywords
  `;

  try {
    const result = await model.generateContent(prompt);
    const aiResponse = result.response.text();

    if (!aiResponse) {
      throw new Error("Failed to generate AI response");
    }

    return {
      position: aiResponse.match(/Job title: (.*)/)?.[1] || "",
      company: aiResponse.match(/Company: (.*)/)?.[1] || "",
      description: (
        aiResponse.match(/Description:([\s\S]*)/)?.[1] || ""
      ).trim(),
      startDate: aiResponse.match(/Start date: (\d{4}-\d{2}-\d{2})/)?.[1],
      endDate: aiResponse.match(/End date: (\d{4}-\d{2}-\d{2})/)?.[1],
    } satisfies WorkExperience;
  } catch (error) {
    console.error("Error generating work experience:", error);
    throw error;
  }
}

export async function generateProjectExperience(
  input: GenerateProjectExperienceInput,
) {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  const subscriptionLevel = await getUserSubscriptionLevel(userId);
  if (!canUseAITools(subscriptionLevel)) {
    throw new Error("Upgrade your subscription to use this feature");
  }

  const { description } = generateProjectExperienceSchema.parse(input);

  const prompt = `
  You are ResumeExpert AI, a specialized resume writer with deep expertise in translating technical projects into compelling resume content that demonstrates technical skills and problem-solving abilities.
  
  TASK: Transform the following project description into a structured, achievement-focused project entry that will impress technical recruiters.
  
  INPUT: ${description}
  
  OUTPUT FORMAT:
  Project name: [Extract or create a concise, professional project title]
  Technologies used: [Identify and list all relevant technologies, programming languages, frameworks, tools, and methodologies]
  Description: [Transform the input into 3-4 powerful bullet points that:
    • Begin with strong technical action verbs (Developed, Architected, Engineered, Implemented, etc.)
    • Highlight technical challenges overcome
    • Emphasize the project's impact or business value
    • Demonstrate your technical expertise and problem-solving abilities
    • Include metrics where applicable (performance improvements, user adoption, etc.)
    • Are properly formatted with bullet points (•) and line breaks]
  
  IMPORTANT:
  1. Preserve the original language of the input
  2. Focus on technical accomplishments rather than just listing features built
  3. Respond ONLY with the structured content in the exact format specified above
  4. Balance technical depth with clarity - make it impressive but understandable
  5. Optimize for technical recruiter assessment by highlighting problem-solving skills
  `;

  try {
    const result = await model.generateContent(prompt);
    const aiResponse = result.response.text();

    if (!aiResponse) {
      throw new Error("Failed to generate AI response");
    }

    return {
      title: aiResponse.match(/Project name: (.*)/)?.[1] || "",
      technologies: aiResponse.match(/Technologies used: (.*)/)?.[1] || "",
      description: (
        aiResponse.match(/Description:([\s\S]*)/)?.[1] || ""
      ).trim(),
    } satisfies ProjectExperience;
  } catch (error) {
    console.error("Error generating project experience:", error);
    throw error;
  }
}
