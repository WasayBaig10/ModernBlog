
// export const apiVersion =
//   process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-03'

// const projectIdEnv = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const datasetEnv = process.env.NEXT_PUBLIC_SANITY_DATASET

// if (!projectIdEnv) {
//   throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID')
// }

// if (!datasetEnv) {
//   throw new Error('Missing NEXT_PUBLIC_SANITY_DATASET')
// }

// export const projectId: string = projectIdEnv
// export const dataset: string = datasetEnv

// export const useCdn = false

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-05-03'

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '1z5yo2fj'

export const useCdn = false
