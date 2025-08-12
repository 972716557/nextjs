import { NextRequest, NextResponse } from "next/server";
export default async function middleware(request: NextRequest) {
  //  可以使用NextResponse.rewrite对路由进行跳转
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
  const pathname = request.nextUrl.pathname;
}
export const config = {
  matcher: ["/about"],
};
