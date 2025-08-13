import { Button } from "antd";
import React from "react";

export const metadata = {
  title: "这是主页",
  description: "主页内容",
};
export default function page() {
  return (
    <div>
      这是page页面
      <Button type="primary">按钮</Button>
    </div>
  );
}
