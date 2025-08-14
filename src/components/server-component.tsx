import React from "react";

import fs from "fs";
export default function ServerComponent() {
  const data = fs.readFileSync("src/db.ts", "utf-8");

  return <div>这是服务端组件</div>;
}
