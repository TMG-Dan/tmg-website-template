import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  formSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    message: v.string(),
    submittedAt: v.number(),
    status: v.union(v.literal('pending'), v.literal('processed')),
  })
    .index('by_status', ['status'])
    .index('by_date', ['submittedAt']),
})
