import { AntdRegistry } from "@ant-design/nextjs-registry";
import React from "react";
import "./globals.css";
export default function Layout({
  children,
  left,
  right,
}: {
  children: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <h2>通过路由实现只刷新右边的children</h2>
          <div className="h-[400px]">
            <div className="flex">
              <div className="flex flex-col">
                <div>{left}</div>
                <div>{right}</div>
              </div>
              <div className="w-2/3">{children}</div>
            </div>
          </div>
        </AntdRegistry>
      </body>
    </html>
  );
}
