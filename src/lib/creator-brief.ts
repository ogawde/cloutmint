type VideoConcepts = {
  idea1: string;
  idea2: string;
  idea3: string;
};

/** Merges the brief body and video concepts into one editable document. */
export function combineCreatorBrief(reelScript: string, ideas: VideoConcepts) {
  const body = reelScript.trim();
  const concepts = [ideas.idea1, ideas.idea2, ideas.idea3]
    .map((idea) => idea.trim())
    .filter(Boolean);

  if (concepts.length === 0) {
    return normalizeBriefSpacing(body);
  }

  const conceptsBlock = concepts
    .map((idea, index) => `${index + 1}. ${idea}`)
    .join("\n\n");

  return normalizeBriefSpacing(`${body}\n\nVideo concepts\n\n${conceptsBlock}`);
}

export function normalizeBriefSpacing(text: string) {
  return text.replace(/\n{3,}/g, "\n\n").trim();
}
