import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../sanity/env'
import { Post } from './interface'
import { MOCK_POSTS } from './mockData'

export const client = (projectId && dataset) 
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn,
      perspective: 'published',
    })
  : null;

export async function getPosts(): Promise<Post[]> {
  if (client && projectId) {
     try {
         const query = `*[_type == "post"] | order(publishedAt desc) {
             _id,
             title,
             slug,
             publishedAt,
             excerpt,
             mainImage,
             author-> {
                 name,
                 image
             }
         }`
         return await client.fetch(query)
     } catch (error) {
         console.error("Sanity fetch failed", error)
     }
  }
  return MOCK_POSTS
}

export async function getPost(slug: string): Promise<Post | undefined> {
   if (client && projectId) {
      try {
          const query = `*[_type == "post" && slug.current == $slug][0] {
              _id,
              title,
              slug,
              publishedAt,
              excerpt,
              body,
              mainImage,
              author-> {
                  name,
                  image,
                  bio
              }
          }`
          return await client.fetch(query, { slug })
      } catch (error) {
           console.error("Sanity fetch failed", error)
      }
   }
   return MOCK_POSTS.find((post) => post.slug.current === slug)
}

export async function searchPosts(term: string): Promise<Post[]> {
    if (client && projectId) {
        try {
            const query = `*[_type == "post" && (title match $term + "*" || excerpt match $term + "*")] | order(publishedAt desc) {
                _id,
                title,
                slug,
                publishedAt,
                excerpt,
                mainImage,
                author-> {
                    name,
                    image
                }
            }`
            return await client.fetch(query, { term })
        } catch (error) {
            console.error("Sanity search failed", error)
        }
    }
    const termLower = term.toLowerCase();
    const allPosts = MOCK_POSTS;
    return allPosts.filter(post =>
        post.title.toLowerCase().includes(termLower) ||
        post.excerpt.toLowerCase().includes(termLower)
    );
}

export async function getAuthors() {
    if (client && projectId) {
        try {
            const query = `*[_type == "author"] | order(name) {
                _id,
                name,
                slug,
                bio,
                image
            }`
            return await client.fetch(query)
        } catch (error) {
            console.error("Sanity fetch failed", error)
        }
    }
    return []
}

export async function getAuthorsWithPosts() {
    if (client && projectId) {
        try {
            const query = `*[_type == "author"] | order(name) {
                _id,
                name,
                slug,
                bio,
                image,
                "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
                    _id,
                    title,
                    slug,
                    excerpt,
                    publishedAt
                }
            }`
            return await client.fetch(query)
        } catch (error) {
            console.error("Sanity fetch failed", error)
        }
    }
    return []
}

export async function getAuthorBySlug(slug: string) {
    if (client && projectId) {
        try {
            const query = `*[_type == "author" && slug.current == $slug][0] {
                _id,
                name,
                slug,
                bio,
                image,
                "posts": *[_type == "post" && references(^._id)] | order(publishedAt desc) {
                    _id,
                    title,
                    slug,
                    excerpt,
                    publishedAt,
                    mainImage
                }
            }`
            return await client.fetch(query, { slug })
        } catch (error) {
            console.error("Sanity fetch failed", error)
        }
    }
    return null
}
