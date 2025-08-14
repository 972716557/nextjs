"use client";
import { createContext, ReactNode, useContext } from "react";
export const LogContext = createContext<{
  data: string;
}>({
  data: "log",
});

export const LogProvider = ({ children }: { children: ReactNode }) => {
  return <LogContext value={{ data: "log" }}>{children}</LogContext>;
};

export const useLog = () => {
  return useContext(LogContext);
};
