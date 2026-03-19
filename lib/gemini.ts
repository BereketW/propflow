import { GoogleGenerativeAI } from "@google/generative-ai";

if (!process.env.GEMINI_API_KEY) {
  console.warn("⚠️ GEMINI_API_KEY is not set. AI features will not work.");
}

export const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY || "placeholder"
);

export const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-pro",
});
