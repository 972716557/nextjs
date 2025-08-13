import React from "react";
import Image from "next/image";
import Link from "next/link";
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

export default function Page() {
  return (
    <div>
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="bg-gray-800 flex-1 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:space-x-10 max-w-6xl sm:p-6 sm:my-2 sm:mx-4 sm:rounded-2xl">
          <div className="flex-1 px-2 sm:px-0">
            <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.map(({ src }, index) => (
                <div
                  key={index}
                  className="relative group bg-gray-900 py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover"
                >
                  <Link href={`/photos/${index}`}>
                    <Image
                      className="w-20 h-20 object-cover object-center rounded-full"
                      src={src}
                      alt="art"
                      width={20}
                      height={20}
                    />
                  </Link>
                  <h4 className="text-white text-2xl font-bold capitalize text-center">
                    Art
                  </h4>
                  <p className="text-white/50">132 members</p>
                  <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">
                    4 Online{" "}
                    <span className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
