import {createClient} from 'next-sanity'

export const sanityConfigured = Boolean(process.env.NEXT_PUBLIC_SANITY_PROJECT_ID)

export const sanityClient = sanityConfigured ? createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-08-01',
  useCdn: true,
}) : null
