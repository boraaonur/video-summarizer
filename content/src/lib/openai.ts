import OpenAI from "openai";
import { ChromeStorageUtils } from "@boraaonur/chrome-extension-utils";
import {
  DEFAULT_GPT_MODEL,
  DEFAULT_LANGUAGE,
  DEFAULT_SYSTEM_PROMPT,
} from "../../../popup/src/constants/defaults";

async function getOpenAIClient(apiKey: string) {
  const openai = new OpenAI({
    apiKey: apiKey,
    dangerouslyAllowBrowser: true,
  });

  return openai;
}

export async function summarizeTranscript({
  transcript,
}: {
  transcript: string | null;
}) {
  const apiKey = await ChromeStorageUtils.get({
    storageKey: "API_KEY",
  });

  const systemPrompt = await ChromeStorageUtils.get({
    storageKey: "SYSTEM_PROMPT",
  });

  const gptModel = await ChromeStorageUtils.get({
    storageKey: "GPT_MODEL",
  });

  const language = await ChromeStorageUtils.get({
    storageKey: "LANGUAGE",
  });

  const openai = await getOpenAIClient(apiKey);

  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: systemPrompt ?? DEFAULT_SYSTEM_PROMPT,
      },
      {
        role: "user",
        content: `Write your response in ${
          language ?? DEFAULT_LANGUAGE
        } language. Here is the transcript: ${transcript}`,
      },
    ],
    model: gptModel ?? DEFAULT_GPT_MODEL,
  });

  return response.choices[0].message.content;
}
