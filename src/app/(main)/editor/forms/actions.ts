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
    
    Instructions: Write a concise, professional summary focusing on key achievements and skills response with the same data language.
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
  You are a job resume generator AI. Your task is to generate a single work experience entry based on the user input.
  Your response must adhere to the following structure. You can omit fields if they can't be infered from the provided data, but don't add any new ones.
  Generate a structured work experience entry based on this description:
  ${description}
  
  Required format:
  Job title: <job title>
  Company: <company name>
  Start date: <YYYY-MM-DD> (only if provided)
  End date: <YYYY-MM-DD> (only if provided)
  Description: <an optimized description in bullet format like this •, might be infered from the job title>
  
  Provide only the structured response.
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
  You are a job resume generator AI. Your task is to generate a single project experience entry based on the user input.
  Your response must adhere to the following structure. You can omit fields if they can't be inferred from the provided data, but don't add any new ones.
  Generate a structured project experience entry based on this description:
  ${description}
  
  Required format:
  Project name: <project name>
  Technologies used: <list of technologies>
  Description: <an optimized description in bullet format like this •, highlighting key achievements and technical details>
  
  Provide only the structured response.
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
