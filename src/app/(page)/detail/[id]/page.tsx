import React from "react";

export default function DetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Test</h1>
      {/* 获取到路由上的参数 */}
      {params.id}
    </div>
  );
}
