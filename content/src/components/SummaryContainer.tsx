import { useTranscriptStore } from "../stores/useTranscriptStore";

function SummaryContainer() {
  const { summary } = useTranscriptStore();

  return (
    <div
      style={{
        display: "block",
        backgroundColor: "var(--yt-spec-brand-background-primary)",
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingBottom: "16px",
        color: "var(--yt-spec-text-primary)",
        fontFamily: `"YouTube Sans","Roboto",sans-serif`,
      }}
    >
      {!summary && <p style={{ fontSize: 14 }}>Awaiting ChatGPT response...</p>}
      {summary && <p style={{ fontSize: 14 }}>{summary}</p>}
    </div>
  );
}

export default SummaryContainer;
