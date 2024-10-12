// middleware.ts
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(request: NextRequest) {
  const cookies = request.cookies.getAll();

  const authToken = cookies.find((cookie) =>
    cookie.name.includes("auth-token")
  );
  if (authToken) {
    return NextResponse.next();
  }

  const currentPath = request.nextUrl.pathname;

  if (!authToken && currentPath !== "/") {
    console.log("Redirecting to home because no session found.");
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
