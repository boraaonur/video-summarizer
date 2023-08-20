import getTranscript, {
  showTranscriptPanel,
  switchToSummaryPanel,
  switchToTranscriptPanel,
} from "../utils/yt-dom-utils";

import { injectSummaryContainer, injectSwitchButton } from "../utils/inject";

import { useTranscriptStore } from "../stores/useTranscriptStore";

import { summarizeTranscript } from "../lib/openai";
import { timeout } from "../utils/common";

function SummarizeButton() {
  const { setSummary } = useTranscriptStore();

  async function handler() {
    try {
      // Reset the summary
      setSummary(null);

      // Adjust the UI
      showTranscriptPanel();
      switchToTranscriptPanel();
      injectSwitchButton();
      injectSummaryContainer();

      const transcript = await getTranscript();

      switchToSummaryPanel();

      const summary = await summarizeTranscript({ transcript: transcript });

      if (summary) {
        setSummary(summary);
      }
    } catch (e) {
      console.error("Failed to summarize the transcript:", e);
    }

    //
  }

  return (
    <button id="youtube-summarizer-summarize-button" onClick={handler}>
      Summarize
    </button>
  );
}

export default SummarizeButton;
