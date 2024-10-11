// middleware.ts
import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(request: NextRequest) {
  // Cookie'dan foydalanuvchi ma'lumotini oling
  const token = request.cookies.get("sb-eiaenpogjzptiwfrxzgh-auth-token"); // cookie nomini o'zgartiring
  

  // Agar cookie mavjud bo'lsa, foydalanuvchini o'tayotgan sahifaga qoldiring
  if (token) {
    return NextResponse.next();
  }

  const currentPath = request.nextUrl.pathname;

  if (!token && currentPath !== "/") {
    // Redirect to the home page if no session and not already on home
    console.log("Redirecting to home because no session found."); // Log redirect action
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Agar cookie mavjud bo'lmasa, foydalanuvchini "/" sahifasiga yo'naltiring
}

// Middleware'ni qo'llash uchun yo'llarni aniqlang
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
