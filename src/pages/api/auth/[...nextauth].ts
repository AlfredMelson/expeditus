import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import NextAuth, { type NextAuthOptions } from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

import { env } from '@src/env/server.mjs'
import clientPromise from '@src/server/db/mongodb'

// https://next-auth.js.org/configuration/options

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
      profile(profile) {
        return {
          id: profile.id.toString(),
          name: profile.name || profile.login,
          username: profile.login,
          email: profile.email,
          image: profile.avatar_url,
          location: profile.location,
        }
      },
    }),
  ],

  // Include user.id on session
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
        username: user.name,
      },
    }),
  },
}

export default NextAuth(authOptions)

// session({ session, user }) {
//   if (session.user) {
//     session.user.id = user.id
//   }
//   return session
// },
