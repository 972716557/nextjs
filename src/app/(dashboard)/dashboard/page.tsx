import { Card } from "antd";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <Card className="w-[200px] h-[200px]">
      旧版右边的
      <Link href="/dashboard-new">
        <button className="bg-blue-500 text-white p-2 rounded">
          跳转到新版页面
        </button>
      </Link>
    </Card>
  );
}
