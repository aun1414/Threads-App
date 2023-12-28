import { authMiddleware } from "@clerk/nextjs";
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
    // An array of public routes that don't require authentication.
    publicRoutes: ["/api/webhook/clerk","/api/uploadthing"],
  
    // An array of routes to be ignored by the authentication middleware.
    ignoredRoutes: ["/api/webhook/clerk"],
  });
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 