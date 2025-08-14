import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { LogProvider } from "@/context/log-context";

import "./globals.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LogProvider>
          <AntdRegistry>{children}</AntdRegistry>
        </LogProvider>
      </body>
    </html>
  );
}
