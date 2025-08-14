"use client";
import React from "react";
import { log } from "@/utils/log";
import { useLog } from "@/context/log-context";

export default function Page() {
  const data = log();
  const logContext = useLog();
  return (
    <div>
      <div>{data}</div>
      <h1>下面是context的数据</h1>
      <div className="text-sky-500">{logContext.data}</div>
    </div>
  );
}
