export const DEFAULT_SYSTEM_PROMPT =
  "When provided with a video transcript, detect its language and generate a concise summary in the same language. Respond only with the summary. If a specific language is requested by the user, use that language for the response instead.";
export const DEFAULT_LANGUAGE = "English";

export const DEFAULT_GPT_MODEL = "gpt-3.5-turbo";

export const GPT_MODEL_OPTIONS = [
  "gpt-4",
  "gpt-4-0314",
  "gpt-4-0613",
  "gpt-4-32k",
  "gpt-4-32k-0314",
  "gpt-4-32k-0613",
  "gpt-3.5-turbo",
  "gpt-3.5-turbo-16k",
  "gpt-3.5-turbo-0301",
  "gpt-3.5-turbo-0613",
  "gpt-3.5-turbo-16k-0613",
] as const;
