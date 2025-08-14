import React from "react";
import { log } from "@/utils/log";

export default function Page() {
  const data = log();
  return <div>{data}</div>;
}
