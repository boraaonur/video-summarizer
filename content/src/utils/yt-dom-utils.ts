import ReactDOM from "react-dom";
import {
  SUMMARY_CONTAINER_SELECTOR,
  TRANSCRIPT_CONTENT_SELECTOR,
  TRANSCRIPT_PANEL_SELECTOR,
  TRANSCRIPT_PANEL_TITLE_SELECTOR,
  VERTICAL_DOTS_BUTTON_SELECTOR,
} from "../constants";
import { setDisplayStyle } from "./common";

// This triggers transcript container button visibility so we can read transcript
export function showTranscriptPanel() {
  const panelElement = document.querySelector(TRANSCRIPT_PANEL_SELECTOR);

  if (panelElement) {
    panelElement.setAttribute(
      "visibility",
      "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"
    );
  }

  return panelElement;
}

// This reads all elements inside transcript container
export function readTranscript() {
  const elements = document.querySelectorAll(
    "yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer"
  );

  let string = "";

  elements.forEach((element) => {
    string += element.textContent;
  });

  return string;
}

export function changeTranscriptPanelTitle(string: "Summary" | "Transcript") {
  const titleElement = document.querySelector(TRANSCRIPT_PANEL_TITLE_SELECTOR);

  if (titleElement) {
    titleElement.setAttribute("title", string);
    titleElement.innerHTML = string;
  }
}

export function switchPanel() {
  const summaryContainer = document.querySelector(
    "#youtube-summarizer-summary-container"
  ) as HTMLElement | null;

  if (summaryContainer?.style.display === "block") {
    switchToTranscriptPanel();
  } else {
    switchToSummaryPanel();
  }
}

export function switchToTranscriptPanel() {
  changeTranscriptPanelTitle("Transcript");
  setDisplayStyle(SUMMARY_CONTAINER_SELECTOR, "hide");
  setDisplayStyle(TRANSCRIPT_CONTENT_SELECTOR, "show");
  setDisplayStyle(VERTICAL_DOTS_BUTTON_SELECTOR, "show");
}

export function switchToSummaryPanel() {
  changeTranscriptPanelTitle("Summary");
  setDisplayStyle(SUMMARY_CONTAINER_SELECTOR, "show");
  setDisplayStyle(TRANSCRIPT_CONTENT_SELECTOR, "hide");
  setDisplayStyle(VERTICAL_DOTS_BUTTON_SELECTOR, "hide");
}

export function getTranscript(): Promise<string> {
  return new Promise((resolve, reject) => {
    const observerOptions = {
      childList: true,
      subtree: true,
    };

    const mutationHandler: MutationCallback = (mutationsList) => {
      for (let mutation of mutationsList) {
        const element = document.querySelector(
          "yt-formatted-string.segment-text.style-scope.ytd-transcript-segment-renderer"
        );

        if (element) {
          const transcript = readTranscript();
          observer.disconnect(); // Disconnect the observer once the transcript is read
          resolve(transcript); // Resolve the promise with the transcript
          return;
        }
      }
    };

    const observer = new MutationObserver(mutationHandler);
    observer.observe(document.body, observerOptions);
  });
}

export default getTranscript;

/*
export function showTranscript() {
    // Change title
    const titleElement = getTitleElement();
    titleElement.setAttribute("title", "Transcript");
    titleElement.innerHTML = "Transcript";
  
    // Hide summary container
    const summaryContainer = getSummaryContainer();
  
    summaryContainer.style.display = "none";
  
    // Show transcript container
    const transcriptContent = getTranscriptContent;
  
    transcriptContent.style.display = "block";
  }
*/

/*
// export function changeTrans

export function modifyTranscriptionContainer() {
  const panelElement = getPanelElement();
  const titleElement = getTitleElement();
  const transcriptContent = getTranscriptContent();

  // Change text
  titleElement.setAttribute("title", "Summary");
  titleElement.innerHTML = "Summary";

  panelElement.setAttribute(
    "visibility",
    "ENGAGEMENT_PANEL_VISIBILITY_EXPANDED"
  );

  // This is a temporary fix. Without this there is a side-effect.
  await timeout(1);

  if (transcriptContent) {
    transcriptContent.style.display = "none";
  } else {
    console.error("Failed to find transcriptContent.");
  }

  // Our element
  const container = document.createElement("div");
  container.id = "youtube-summarizer-extension";

  insertNode({
    insert: container,
    after: transcriptContent,
  });

  /// ReactDOM.render(<SummaryContainer />, container);
}

export function showTranscript() {
  // Change title
  const titleElement = getTitleElement();
  titleElement.setAttribute("title", "Transcript");
  titleElement.innerHTML = "Transcript";

  // Hide summary container
  const summaryContainer = getSummaryContainer();

  summaryContainer.style.display = "none";

  // Show transcript container
  const transcriptContent = getTranscriptContent;

  transcriptContent.style.display = "block";
}

export function showSummary() {
  // Change title
  const titleElement = document.querySelector(TITLE_SELECTOR) as HTMLElement;
  titleElement.setAttribute("title", "Summary");
  titleElement.innerHTML = "Summary";

  // Hide transcript container
  const transcriptContent = document.querySelector(
    TRANSCRIPT_SELECTOR
  ) as HTMLElement;

  transcriptContent.style.display = "none";

  // Show summary container
  const summaryContainer = document.querySelector(
    SUMMARY_CONTAINER_SELECTOR
  ) as HTMLElement;

  summaryContainer.style.display = "block";
}
*/
