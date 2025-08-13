import React from "react";
import Image from "next/image";
const data = [
  {
    href: "",
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    href: "",
    src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
  },
  {
    href: "",
    src: "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    href: "",
    src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80",
  },
  {
    href: "",
    src: "https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1174&q=80",
  },
  {
    href: "",
    src: "https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    href: "",
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
];
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const src = data[Number(id)].src;
  return (
    <div className="container mx-auto p-40 flex justify-center items-center flex-col space-y-4">
      <Image
        src={src}
        alt="logo"
        width={400}
        height={400}
        className="rounded-lg"
      />
      <div className="border-2 border-gray-500 rounded-lg p-3">
        <p>
          <strong>Title:</strong>
        </p>
        <p>
          <strong>这是标题</strong>
        </p>
        <p>
          <strong>这是描述</strong>
        </p>
        <p>
          Start Strong This Year | 80% OFF Creative Tim Club Take your workflow
          to new heights by joining our exclusive club for access to all our
          current and future products. * one time payment - no hidden fees, no
          subscription
        </p>
      </div>
    </div>
  );
}
