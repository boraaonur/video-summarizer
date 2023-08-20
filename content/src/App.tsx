import { useEffect, useRef } from "react";
import SummarizeButton from "./components/SummarizeButton";

import { injectComponent } from "@boraaonur/chrome-extension-utils";
import { injectSummarizeButton } from "./utils/inject";

const observerOptions = {
  childList: true,
  subtree: true,
};

const mutationHandler: MutationCallback = (mutationsList, observer) => {
  for (let mutation of mutationsList) {
    injectSummarizeButton();
  }
};

function App() {
  const observer = useRef<MutationObserver | null>(null);

  useEffect(() => {
    // Creating and starting the observer
    observer.current = new MutationObserver(mutationHandler);
    observer.current.observe(document.body, observerOptions);

    return () => {
      if (observer.current) {
        console.log("Disconnecting the observer");
        observer.current.disconnect();
      }
    };
  }, []);

  return null;
}

export default App;
