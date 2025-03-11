import { GoogleGenerativeAI } from "@google/generative-ai";

// First file (similar to your OpenAI setup)
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export default model;
