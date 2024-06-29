import NextAuth, { AuthOptions } from 'next-auth'
import { Adapter } from 'next-auth/adapters'
import GitHub from 'next-auth/providers/github'
import { NextRequest, NextResponse } from 'next/server'
import { Logger } from 'pino'
import { pgDrizzleAdapter } from './auth.adapter'
import { db } from './db'
import { getEnv } from './env'
import { getCorrelationId, getLogger } from './logger'

const env = getEnv()

export const getAuthOptions = (logger: Logger) => {
  const options: AuthOptions = {
    adapter: pgDrizzleAdapter(db()) as Adapter,
    providers: [
      // GoogleProvider({
      //   clientId: env.GOOGLE_CLIENT_ID,
      //   clientSecret: env.GOOGLE_CLIENT_SECRET,
      // }),
      GitHub({
        clientId: env.GITHUB_CLIENT_ID,
        clientSecret: env.GITHUB_CLIENT_SECRET,
      }),
    ],
    logger: {
      debug: (code, metadata) => {
        logger.debug({ msg: code, metadata })
      },
      error: (code, metadata) => {
        logger.error({ msg: code, metadata })
      },
      fatal: (code: string, metadata: any) => {
        logger.fatal({ msg: code, metadata })
      },
      info: (code: string, metadata: any) => {
        logger.info({ msg: code, metadata })
      },
      warn: (code) => {
        logger.warn({ msg: code })
      },
    },
  }
  return options
}

const handler = async (req: NextRequest, res: NextResponse) => {
  const correlationId = getCorrelationId(req.headers)
  const authOptions = getAuthOptions(getLogger().child({ correlationId }))
  const nextAuthHandler = NextAuth(authOptions)
  return nextAuthHandler(req, res)
}

export { handler as GET, handler as POST }

const testing = 'testing'

let test = 'test'
