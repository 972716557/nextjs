import React from "react";
import { Metadata } from "next";

interface Params {
  params: { id: string };
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
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

// ssg
// export async function getStaticPaths() {
//   const data = await fetch(`/api/articles`);
//   return {
//     paths: data.map((item) => ({
//       params: {
//         id: "1",
//       },
//     })),
//     fallback: false,
//     // fallback: true, // 设置fallback为true时，如果找不到对应的路由，会变成客户端渲染
//   };
// }
// export const getStaticProps = async ({ params }: Params) => {
//   const { id } = await params;
//   // 在这里可以进行数据获取或其他逻辑处理
//   // 返回 props 以传递给组件
//   // 比如fetch(`/api/articles/${id}`);
//   return {
//     props: {
//       id,
//     },
//     revalidate: 30, // 可选，设置页面重新生成的时间差，单位为秒
//   };
// };

// // ssr
// export const getServerSideProps = async ({ params }: Params) => {
//   const { id } = await params;
//   // 在这里可以进行数据获取或其他逻辑处理
//   // 返回 props 以传递给组件
//   // 比如fetch(`/api/articles/${id}`);
//   return {
//     props: {
//       id,
//     },
//   };
// };
