import {
  Button,
  HStack,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { langs } from "./constants/langs";
import { useEffect, useState } from "react";
import { ChromeStorageUtils } from "@boraaonur/chrome-extension-utils";
import {
  GPT_MODEL_OPTIONS,
  DEFAULT_GPT_MODEL,
  DEFAULT_LANGUAGE,
  DEFAULT_SYSTEM_PROMPT,
} from "./constants/defaults";

type GPTModel = (typeof GPT_MODEL_OPTIONS)[number];

function Home() {
  const [gptModel, setGptModel] = useState<GPTModel>(DEFAULT_GPT_MODEL);
  const [language, setLanguage] = useState<string>(DEFAULT_LANGUAGE);
  const [systemPrompt, setSystemPrompt] = useState(DEFAULT_SYSTEM_PROMPT);
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    chrome.storage.local.get(
      ["GPT_MODEL", "LANGUAGE", "SYSTEM_PROMPT", "API_KEY"],
      (result) => {
        console.log(result);
        if (result.GPT_MODEL) setGptModel(result.GPT_MODEL);
        if (result.LANGUAGE) setLanguage(result.LANGUAGE);
        if (result.SYSTEM_PROMPT) setSystemPrompt(result.SYSTEM_PROMPT);
        if (result.API_KEY) setApiKey(result.API_KEY);
      }
    );
  }, []);

  return (
    <VStack className="w-[360px] h-min p-4">
      <Text>GPT Model</Text>
      <Select
        value={gptModel}
        onChange={(e) => {
          setGptModel(e.target.value as GPTModel);
        }}
      >
        {GPT_MODEL_OPTIONS.map((model) => (
          <option value={model}>{model}</option>
        ))}
      </Select>
      <Text>Language</Text>
      <Select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
      >
        <option value="Auto-detect">Auto-detect</option>
        {Object.entries(langs).map(([key, value]) => {
          return <option value={`${value.name}`}>{value.name}</option>;
        })}
      </Select>
      <Text>OPENAI API KEY</Text>
      <Input
        type="password"
        placeholder="sk-**************"
        value={apiKey}
        onChange={(e) => {
          setApiKey(e.target.value);
        }}
      />
      <Text>System Prompt</Text>
      <Textarea
        value={systemPrompt}
        placeholder={DEFAULT_SYSTEM_PROMPT}
        onChange={(e) => setSystemPrompt(e.target.value)}
      />
      <HStack w="full" justify="space-between">
        <Button
          onClick={() => {
            setLanguage("English");
            setGptModel("gpt-3.5-turbo");
            setSystemPrompt(DEFAULT_SYSTEM_PROMPT);
            setApiKey("");

            ChromeStorageUtils.set({ storageKey: "API_KEY", data: "" });
            ChromeStorageUtils.set({
              storageKey: "LANGUAGE",
              data: DEFAULT_LANGUAGE,
            });
            ChromeStorageUtils.set({
              storageKey: "SYSTEM_PROMPT",
              data: DEFAULT_SYSTEM_PROMPT,
            });
            ChromeStorageUtils.set({
              storageKey: "GPT_MODEL",
              data: DEFAULT_GPT_MODEL,
            });
          }}
        >
          Reset
        </Button>
        <Button
          onClick={() => {
            //
            ChromeStorageUtils.set({ storageKey: "API_KEY", data: apiKey });
            ChromeStorageUtils.set({ storageKey: "LANGUAGE", data: language });
            ChromeStorageUtils.set({
              storageKey: "SYSTEM_PROMPT",
              data: systemPrompt,
            });
            ChromeStorageUtils.set({ storageKey: "GPT_MODEL", data: gptModel });
          }}
        >
          Save
        </Button>
      </HStack>
    </VStack>
  );
}

export default Home;
