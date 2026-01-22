import React from "react";
import { LogProvider } from "@/context/log-context";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LogProvider>{children}</LogProvider>;
}
