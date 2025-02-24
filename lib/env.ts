import { z } from 'zod'
const envSchema = z.object({
  DATABASE_URL: z.string(),
  DATABASE_USERNAME: z.string(),
  DATABASE_PASSWORD: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
  MIGRATION_URL: z.string(),
})

let fetchedEnvs: z.infer<typeof envSchema> | null = null

export const getEnv = () => {
  if (!fetchedEnvs) {
    const {
      DATABASE_URL,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET,
      MIGRATION_URL,
    } = process.env
    const envs = {
      DATABASE_URL,
      DATABASE_USERNAME,
      DATABASE_PASSWORD,
      GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET,
      GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET,
      MIGRATION_URL,
    }
    const result = envSchema.safeParse(envs)
    if (!result.success) {
      throw new Error(result.error.message)
    }
    fetchedEnvs = result.data
    return result.data
  }
  return fetchedEnvs
}
