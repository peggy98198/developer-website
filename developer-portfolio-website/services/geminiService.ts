import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you might want to handle this more gracefully.
  // For this example, we'll throw an error if the API key is missing.
  console.warn("API_KEY environment variable is not set. Privacy Policy generator will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const generatePrivacyPolicy = async (appName: string, developerName: string): Promise<string> => {
  if (!API_KEY) {
    return Promise.resolve("API Key is not configured. Please set the API_KEY environment variable to use this feature.");
  }
  
  const prompt = `
    Create a generic, comprehensive, and clear privacy policy template for a mobile application to be published on the Apple App Store.
    
    The policy should be suitable for a small, independent developer.
    It should cover common data practices for a simple mobile app that might include analytics and third-party services.
    
    Please use the following placeholders:
    - App Name: "${appName}"
    - Developer Name: "${developerName}"
    - Contact Email: "contact@zziraengi.com"
    - Effective Date: "[Date]"

    Structure the policy with clear headings and easy-to-understand language. Include sections for:
    1.  Introduction
    2.  Information We Collect (distinguish between user-provided and automatically collected data)
    3.  How We Use Your Information
    4.  Information Sharing and Disclosure
    5.  Data Security
    6.  Children's Privacy
    7.  Your Rights
    8.  Changes to This Privacy Policy
    9.  Contact Us

    The output should be in Markdown format.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating privacy policy:", error);
    return "An error occurred while generating the privacy policy. Please check the console for more details.";
  }
};