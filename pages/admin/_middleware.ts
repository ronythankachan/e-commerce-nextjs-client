import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { backendURL } from "../../lib/utils";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  const userCookie: string = req.cookies.user;
  const redirectUrl: string = getRedirectUrl(req)!;
  console.log("redirecturl", redirectUrl);
  if (userCookie === undefined)
    return NextResponse.redirect(`/login?next=${redirectUrl}`);
  else if ((await authorizeStatus(userCookie)) !== 200)
    return NextResponse.redirect(`/login?next=${redirectUrl}`);
}

const getRedirectUrl = (req: NextRequest) => {
  return req.page.params?.id !== undefined
    ? req.page.name?.replace("[id]", req.page.params.id)
    : req.page.name;
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
