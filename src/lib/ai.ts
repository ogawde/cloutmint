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
  idea1: string;
  idea2: string;
  idea3: string;
  reelScript: string;
};

export async function generateHooks(
  productDescription: string,
  options?: {
    previousScript?: string;
    regenAttempt?: number;
  },
): Promise<HooksResponse> {
  const regenAttempt = options?.regenAttempt ?? 1;
  const isRegeneration = regenAttempt > 1;
  const regenerationInstruction = isRegeneration
    ? `
REGENERATION REQUEST:
- This is attempt ${regenAttempt}.
- The previous brief was rejected. Write a fresh brief with a different angle.
- Do not reuse the same opening lines, deliverables wording, or idea starters from the previous brief.
`
    : "";

  const completion = await openai.chat.completions.create({
    model: "qwen/qwen-2.5-72b-instruct",
    messages: [
      {
        role: "system",
        content: `
You write creator briefs for brands posting UGC jobs on TikTok, Instagram Reels, and YouTube Shorts.

Your tone is casual and practical — like a marketing coordinator sending guidance to a creator, not a film director writing a shot list.

Based ONLY on the product description, produce:

1) A creator brief (reelScript)
2) Three creative video concepts (idea1, idea2, idea3)

The goal is to give creators enough direction to understand the campaign while leaving them free to create their own content.

CREATOR BRIEF (reelScript) — one string, plain text, no markdown:

Write 3 short parts in this order, separated by blank lines (use \\n\\n between parts inside the JSON string):

Part A — Video direction (2–4 sentences)

Describe:
- The type of content the brand is looking for
- The overall vibe and style
- Suggested format (talking head, demo, routine, testimonial, review, GRWM, educational, etc.)
- Approximate length (typically 30–60 seconds)
- What a successful video should communicate

Part B — Must-include deliverables

Write 2–5 bullet-style lines.

Each line must start with "- "

Include only concrete requirements.

Always include at least one required spoken or on-screen mention of:
- the product name, OR
- a key benefit explicitly mentioned in the product description, OR
- a tagline provided in the product description

Never invent taglines, claims, statistics, guarantees, or benefits that are not present in the product description.

Examples of valid deliverables:
- Mention the product name on screen.
- Show the product being used.
- Explain one key benefit.
- Include a specific CTA provided in the description.
- End with a recommendation or personal takeaway.

Part C — Creative freedom

Write 1–2 sentences clearly stating that the creator has full freedom to write their own script, structure, pacing, personality, and delivery style as long as the required deliverables are included.

VIDEO CONCEPTS (idea1, idea2, idea3)

Each concept should:

- Be 1–2 sentences long
- Describe a video angle or story idea the creator can expand into their own content
- Not be a complete script
- Not be a shot list
- Not contain scene directions
- Not contain hashtags
- Not contain emojis
- Be meaningfully different from the others

Good examples:

Idea:
Talk about a common problem the audience faces and explain how the product fits naturally into your daily routine.

Idea:
Show a before-and-after experience highlighting the most noticeable benefit of the product.

Idea:
Share an honest first-impression or recommendation-style video explaining who the product is best suited for.

STRICT OUTPUT RULES:

- Return ONLY valid JSON
- No preamble
- No explanations
- No code fences
- All string values must be JSON-safe
- Use \\n for line breaks
- Never use raw newline characters inside JSON strings
- Escape double quotes with \\" when necessary

Use this exact structure:

{
  "idea1": "string",
  "idea2": "string",
  "idea3": "string",
  "reelScript": "string"
}

${regenerationInstruction}
`
      },
      {
        role: "user",
        content: isRegeneration
          ? `Product description:\n${productDescription}\n\nPrevious rejected brief:\n${options?.previousScript ?? ""}\n\nGenerate a brand new creator brief and idea starters.`
          : productDescription,
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

