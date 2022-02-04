import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const userCookie: string = req.cookies.user;
  console.log(userCookie);
  if (userCookie === undefined) {
    return NextResponse.redirect(`/login?next=${req.page.name}`);
  } else {
    const accessToken = JSON.parse(userCookie).accessToken;
    console.log("Inside post request call");
    const result = await fetch("http://localhost:8000/auth/authorize", {
      method: "POST",
      body: JSON.stringify({ accessToken }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    if (result.status !== 200) {
      return NextResponse.redirect(`/login?next=${req.page.name}`);
    }
  }
}
