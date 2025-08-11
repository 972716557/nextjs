import React from "react";

interface Params {
  params: { id: string };
}
export async function generateMetadata({ params }: Params) {
  const { id } = await params;
  return {
    title: `商品详情-${id}`,
    description: `商品详情页面-${id}`,
  };
}
export default async function DetailPage({ params }: Params) {
  const { id } = await params;

  return (
    <div>
      <h1>Test</h1>
      {/* 获取到路由上的参数 */}
      {id}
    </div>
  );
}
