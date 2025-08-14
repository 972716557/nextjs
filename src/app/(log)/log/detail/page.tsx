import React from "react";
import { clientOnly } from "@/utils/client-only";

export default function Detail() {
  clientOnly();
  return <div>这个功能只能在客户端运行</div>;
}
