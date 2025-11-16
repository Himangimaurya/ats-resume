// app/store/resumeData.ts
import { create } from "zustand";

export type ResumeData = {
  name: string;
  email: string;
  phone: string;
  summary: string;
  education: string;
  skills: string;
};

type ResumeStore = {
  data: ResumeData;
  setData: (values: Partial<ResumeData>) => void;
};

export const useResumeStore = create<ResumeStore>((set) => ({
  data: {
    name: "",
    email: "",
    phone: "",
    summary: "",
    education: "",
    skills: "",
  },
  setData: (values) =>
    set((state) => ({
      data: { ...state.data, ...values },
    })),
}));


