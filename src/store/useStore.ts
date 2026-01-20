import { create } from "zustand";

type Language = "en" | "hi" | "te";

interface Store {
  language: Language;
  category: string;
  setLanguage: (lang: Language) => void;
  setCategory: (cat: string) => void;
}

export const useStore = create<Store>((set) => ({
  language: "en",
  category: "",
  setLanguage: (lang) => set({ language: lang }),
  setCategory: (cat) => set({ category: cat }),
}));
