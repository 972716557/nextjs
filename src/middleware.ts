import { NextRequest, NextResponse } from "next/server";
export default async function middleware(request: NextRequest) {
  // 这里就可以对所有页面进行是否登录校验
  // if (request.nextUrl.pathname !== "/login") {
  //   const token = request.cookies.get("token");
  //   if (!token) return NextResponse.redirect(new URL("/login", request.url));
  // }

  //  可以使用NextResponse.rewrite对路由进行跳转
  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.rewrite(new URL("/", request.url));
  }
  const pathname = request.nextUrl.pathname;
}
// export const config = {
//   matcher: ["/about"],
// };
