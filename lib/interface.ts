export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any; // Using 'any' for Portable Text blocks for now, can be specific later
  mainImage: any;
  author?: Author | null;
}

export interface Author {
  _id?: string;
  name: string;
  slug?: { current: string };
  image: any;
  bio: any | string; // Can be Portable Text array or string
}

export interface AuthorPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage?: any;
}

export interface AuthorWithPosts extends Author {
  posts: AuthorPost[];
}
