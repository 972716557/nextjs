import React from "react";
import { log } from "@/utils/log";
import ClientComponent from "@/components/client-component";
import ServerComponent from "@/components/server-component";

export default function Page() {
  const data = log();
  return (
    <div>
      <div>{data}</div>
      <h1>下面是context的数据</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
