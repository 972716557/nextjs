import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import "../../globals.css";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <AntdRegistry>{children}</AntdRegistry>
      </body>
    </html>
  );
}
