"use client";

import { create } from "zustand";

type ResumeData = {
  name: string;
  email: string;
  phone: string;
  summary: string;
  education: string;
  skills: string[];
  setData: (data: Partial<ResumeData>) => void;
};

export const useResumeStore = create<ResumeData>((set) => ({
  name: "",
  email: "",
  phone: "",
  summary: "",
  education: "",
  skills: [],
  setData: (data) => set((state) => ({ ...state, ...data })),
}));
