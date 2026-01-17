import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
  defaultHeaders: {
    "HTTP-Referer": process.env.SITE_URL ?? "http://localhost:3000",
    "X-Title": "CloutMint",
  },
});

type HooksResponse = {
  hook1: string;
  hook2: string;
  hook3: string;
};

export async function generateHooks(
  productDescription: string,
): Promise<HooksResponse> {
  const completion = await openai.chat.completions.create({
    model: "qwen/qwen-2.5-72b-instruct",
    messages: [
      {
        role: "system",
        content:
          "You are a direct response ad copywriter. Generate 3 TikTok hooks based on the product description. Hook 1: Curiosity Gap. Hook 2: Bold Claim. Hook 3: Problem/Agitate/Solve. Return only a JSON object with keys: hook1, hook2, hook3.",
      },
      {
        role: "user",
        content: productDescription,
      },
    ],
    response_format: { type: "json_object" },
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new Error("No hooks generated");
  }

  const parsed = JSON.parse(content) as HooksResponse;

  return parsed;
}

