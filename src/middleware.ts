import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  if (!req.cookies.get("session")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/management", "/profile"],
};
