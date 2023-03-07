import { z } from 'zod'

import type { SharedQnLinkModel } from '@src/server/zod'

export type SharedQnLink = z.infer<typeof SharedQnLinkModel>

const CreateSharedQnLinkModel = z.object({
  url: z.string(),
  slug: z.string(),
  questionID: z.string(),
})

export type CreateSharedQnLink = z.infer<typeof CreateSharedQnLinkModel>
