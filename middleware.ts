import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect dashboard routes
  const protectedPaths = ["/dashboard", "/proposals", "/invoices", "/settings"];
  const isProtectedRoute = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  if (isProtectedRoute) {
    const sessionCookie = request.cookies.get("better-auth.session_token");

    if (!sessionCookie) {
      const signInUrl = new URL("/sign-in", request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }
  }

  // Redirect authenticated users away from auth pages
  const authPaths = ["/sign-in", "/sign-up"];
  const isAuthRoute = authPaths.some((path) => pathname.startsWith(path));

  if (isAuthRoute) {
    const sessionCookie = request.cookies.get("better-auth.session_token");
    if (sessionCookie) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/proposals/:path*",
    "/invoices/:path*",
    "/settings/:path*",
    "/sign-in",
    "/sign-up",
  ],
};
