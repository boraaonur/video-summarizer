import { HiSwitchHorizontal } from "react-icons/hi";
import { switchPanel } from "../utils/yt-dom-utils";

function SwitchButton() {
  return (
    <button
      style={{
        padding: "8px",
        marginRight: "16px",
      }}
      onClick={switchPanel}
    >
      <HiSwitchHorizontal />
    </button>
  );
}

export default SwitchButton;
