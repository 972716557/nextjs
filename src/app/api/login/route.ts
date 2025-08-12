import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  const r = await fetch("https://jsonplaceholder.typicode.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  console.log("r", r);
  const data = await r.json();
  // 这种方式跟下面的方式是等价的
  // const response = NextResponse.json({
  //   data,
  // });
  // response.cookies.set("token", data.token, {
  //   path: "/",
  //   maxAge: 60 * 60,
  //   httpOnly: true,
  //   sameSite: "strict",
  // });
  return NextResponse.json({});
  return (
    NextResponse.json({
      data,
    }),
    {
      // 设置TOKEN 在cookie中
      headers: {
        "Set-Cookie": `token=${data.token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=3600`,
      },
    }
  );
}
