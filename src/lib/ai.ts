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
  reelScript: string;
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
          `
        You are an elite short-form direct response copywriter specialized in TikTok and Instagram Reels.

Your task:
Generate 3 high-converting TikTok hooks and a 30–60 second vertical reel script based ONLY on the provided product description.

HOOK REQUIREMENTS:
- 8–16 words each
- Each hook must use a different psychological angle (curiosity, pain, urgency, transformation, authority, or bold claim)
- Punchy and scroll-stopping
- No emojis
- No hashtags
- No quotation marks inside the text
- No generic phrases

REEL SCRIPT REQUIREMENTS:
- 30–60 seconds
- Fast-paced and optimized for retention
- Written as a single string
- Must clearly include VISUAL cues and AUDIO cues
- Format each beat like this inside the string:

[Visual: description of what is shown]
[Audio: what is said]

- Use short, sharp sentences
- Focus on benefits and transformation
- No fluff
- No filler intros
- No markdown formatting

OUTPUT RULES:
- Return ONLY valid JSON
- No explanation
- No extra text
- No markdown
- Use this exact structure:

{
  "hook1": "string",
  "hook2": "string",
  "hook3": "string",
  "reelScript": "string"
}
`
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

