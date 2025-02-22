import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl; 

  // Define protected routes
  const protectedRoutes = ["/browse-bets"];

  // Check if the requested route is protected
  if (protectedRoutes.includes(pathname)) {
    // Get the token from the request
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    // If no token, redirect to the sign-in page
    if (!token) {
      const signInUrl = new URL("/api/auth/signin", req.url);
      signInUrl.searchParams.set("callbackUrl", req.url); // 
      return NextResponse.redirect(signInUrl);
    }
  }

  // Allow the request to continue if the route is not protected or the user is authenticated
  return NextResponse.next();
}

// Specify which routes the middleware should apply to
export const config = {
  matcher: ["/browse-bets"], // Add more routes here if needed
};