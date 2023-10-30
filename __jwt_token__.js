/**
 * ----------------------------
 *      MAKE API SECURE
 * ----------------------------
 * Permit only the authorized user to access data through api
 * 
 * concept: 
 * 1. assign two token for each person (access token, refresh token)
 * 2. access token contains: user identification (email, role, etc.). valid for a shorter duration
 * 3. refresh token is used: to recreate an access token that was expired.
 * if refresh token is also invalid then logout the user
 * 
 * 
 */

/**
 * 1. JWT --> Json Web Token
 * 
 */