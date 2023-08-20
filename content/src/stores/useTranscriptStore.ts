import { create } from "zustand";

interface BearState {
  // transcript: string | null;
  // setTranscript: (str: string | null) => void;
  summary: string | null;
  setSummary: (str: string | null) => void;
}

export const useTranscriptStore = create<BearState>()((set) => ({
  // transcript: "",
  // setTranscript: (str) => set((state) => ({ transcript: str })),
  summary: "",
  setSummary: (str) => set((state) => ({ summary: str })),
}));
