
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Protect only certain routes
const isProtectedRoute = createRouteMatcher(['/dashboard(.*)', '/profile(.*)']);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

// Tell Next.js which routes the middleware applies to
export const config = {
  matcher: [
    // Run middleware on all routes except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
