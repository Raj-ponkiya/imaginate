import { clerkMiddleware,createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

export default clerkMiddleware((auth, req)=>{
  // if(isProtectedRoute(req)) auth().protect();
  if(req.nextUrl.pathname === '/api/webhooks/clerk'){
    return NextResponse.next();
  }

  return NextResponse.next();
});

// export default clerkMiddleware()
export const config = {
  matcher: [
    // Skip Next.js internals and all  static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};