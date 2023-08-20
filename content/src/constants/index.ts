// This is main transcript panel. It consists of header, content and footer
export const TRANSCRIPT_PANEL_SELECTOR =
  'ytd-engagement-panel-section-list-renderer[target-id="engagement-panel-searchable-transcript"]';

// Header of Transcript Panel
export const TRANSCRIPT_PANEL_HEADER_SELECTOR = `${TRANSCRIPT_PANEL_SELECTOR} #header`;

// This is inner container of transcript panel where transcript resides
export const TRANSCRIPT_CONTENT_SELECTOR =
  '[target-id="engagement-panel-searchable-transcript"] #content';

// Title of Transcript Panel
export const TRANSCRIPT_PANEL_TITLE_SELECTOR = `${TRANSCRIPT_PANEL_SELECTOR} #title-text`;

// This is one of our injected content
export const SUMMARY_CONTAINER_SELECTOR = `${TRANSCRIPT_PANEL_SELECTOR} #youtube-summarizer-summary-container`;

// This is vertical dots in Transcript Panel Header where you can on/off timestamps
export const VERTICAL_DOTS_BUTTON_SELECTOR = `${TRANSCRIPT_PANEL_HEADER_SELECTOR} #menu`;
