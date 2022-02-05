import { NextURL } from "next/dist/server/web/next-url";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { backendURL } from "../../lib/utils";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const userCookie: string = req.cookies.user;
  const redirectUrl: NextURL = getRedirectUrl(req);
  if (userCookie === undefined) return NextResponse.redirect(redirectUrl);
  else if ((await authorizeStatus(userCookie)) !== 200)
    return NextResponse.redirect(redirectUrl);
}

const getRedirectUrl = (req: NextRequest) => {
  const redirectUrl = req.nextUrl.clone();
  redirectUrl.searchParams.append("next", redirectUrl.pathname);
  redirectUrl.pathname = `/login`;
  return redirectUrl;
};

const authorizeStatus = async (userCookie: string): Promise<number> => {
  const accessToken = JSON.parse(userCookie).accessToken;
  const result = await fetch(`${backendURL}/auth/authorize`, {
    method: "POST",
    body: JSON.stringify({ accessToken }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return result.status;
};
