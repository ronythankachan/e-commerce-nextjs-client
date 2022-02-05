import jwtDecode from "jwt-decode";
import { NextURL } from "next/dist/server/web/next-url";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { backendURL } from "../../lib/utils";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const userCookie: string = req.cookies.user;
  const redirectUrl: NextURL = getRedirectUrl(req);
  if (userCookie === undefined) return NextResponse.redirect(redirectUrl);
  else {
    const accessToken = JSON.parse(userCookie).accessToken;
    const isAuth = await authorize(accessToken);
    if (!isAuth) return NextResponse.redirect(redirectUrl);
    else if (!isAdmin(accessToken)) return NextResponse.redirect("/");
  }
}

const getRedirectUrl = (req: NextRequest) => {
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.searchParams.append("next", redirectUrl.pathname);
  redirectUrl.pathname = `/login`;
  return redirectUrl;
};

const isAdmin = (accessToken: string): boolean => {
  const user: any = jwtDecode(accessToken);
  return user.admin;
};

const authorize = async (accessToken: string): Promise<boolean> => {
  const result = await fetch(`${backendURL}/auth/authorize`, {
    method: "POST",
    body: JSON.stringify({ accessToken }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (result.status === 200) return true;
  return false;
};
