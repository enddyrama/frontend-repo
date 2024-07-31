import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export default function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const authCookie = cookieStore.get("AUTH");
  const auth = authCookie?.value ? JSON.parse(authCookie?.value) : "";

  const url = req.nextUrl.pathname;
  if (!auth) {
    if (!url.includes("/login") && !url.includes("/register")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } else {
    if (!url.includes("/main")) {
      return NextResponse.redirect(new URL("/main", req.url));
    }
  }
  return NextResponse.next();
}
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
