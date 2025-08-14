import { Card } from "antd";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <Card className="w-[200px] h-[200px]">
      这是新版的页面
      <Link href="/dashboard">
        <button className="bg-blue-500 text-white p-2 rounded">
          返回旧版页面
        </button>
      </Link>
    </Card>
  );
}
