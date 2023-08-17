import NextAuth from 'next-auth'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'


export default NextAuth({
  providers: [
  
    FacebookProvider({
      idToken: true,
      clientId: '706836997418106',
      clientSecret:"5fa4c5c6efa8aa9c6eb492c415e77170",
      authorization: {
        url: "https://www.facebook.com/dialog/oauth",
        params: {
          client_id:'706836997418106',
          scope: "openid email",
          response_type: "code",
        },
      },
      
 
    }),
    GoogleProvider({
      clientId: "1096968720685-2te0t3hj08p4a1t5t5e3et0bcruh0h52.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),

  ]
})