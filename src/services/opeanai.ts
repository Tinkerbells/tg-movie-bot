import OpenAI from "openai";

type CompletionType = {
  title: string;
  isShow: boolean;
};

const openai = new OpenAI({
  apiKey: Bun.env.OPENAI_API_KEY,
});

export const fetchCompletions = async (
  prompt: string,
): Promise<CompletionType> => {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: prompt }],
    model: "gpt-3.5-turbo",
  });
  return JSON.parse(chatCompletion.choices[0].message.content!);
};
