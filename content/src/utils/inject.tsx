import { injectComponent } from "@boraaonur/chrome-extension-utils";
import SummaryContainer from "../components/SummaryContainer";
import SwitchButton from "../components/SwitchButton";
import {
  TRANSCRIPT_PANEL_TITLE_SELECTOR,
  TRANSCRIPT_CONTENT_SELECTOR,
} from "../constants";
import SummarizeButton from "../components/SummarizeButton";

export function injectSwitchButton() {
  injectComponent({
    targetElement: TRANSCRIPT_PANEL_TITLE_SELECTOR,
    id: "youtube-summarizer-switch-button",
    component: <SwitchButton />,
    position: "before",
  });
}

export function injectSummaryContainer() {
  injectComponent({
    targetElement: TRANSCRIPT_CONTENT_SELECTOR,
    id: "youtube-summarizer-summary-container",
    component: <SummaryContainer />,
    position: "after",
    callback: (container) => {
      container.style.display = "block";
      container.style.overflow = "auto";
    },
  });
}

export function injectSummarizeButton() {
  injectComponent({
    targetElement: `#above-the-fold #title h1`,
    position: "append",
    component: <SummarizeButton />,
    id: "youtube-summarizer-summarize-button",
  });
}
