import React from "react";

interface Params {
  params: { id: string };
}
export async function generateMetadata({ params }: Params) {
  return {
    title: `商品详情-${params.id}`,
    description: `商品详情页面-${params.id}`,
  };
}
export default function DetailPage({ params }: Params) {
  return (
    <div>
      <h1>Test</h1>
      {/* 获取到路由上的参数 */}
      {params.id}
    </div>
  );
}
