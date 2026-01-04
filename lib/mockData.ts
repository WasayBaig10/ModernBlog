import { Post } from "./interface";

export const MOCK_POSTS: Post[] = [
  {
    _id: "1",
    title: "The Future of Web Development",
    slug: { current: "future-of-web-development" },
    publishedAt: "2024-05-15T10:00:00Z",
    excerpt: "Exploring the latest trends in Next.js, React, and modern CSS architectures including RSCs and Server Actions.",
    body: [],
    mainImage: null,
    author: {
      name: "John Doe",
      image: null,
      bio: "Tech Enthusiast",
    },
  },
  {
    _id: "2",
    title: "Mastering Framer Motion",
    slug: { current: "mastering-framer-motion" },
    publishedAt: "2024-05-18T14:30:00Z",
    excerpt: "A deep dive into creating complex animations and gestures to delight your users with 60fps smoothness.",
    body: [],
    mainImage: null,
    author: {
      name: "Jane Smith",
      image: null,
      bio: "Creative Developer",
    },
  },
  {
    _id: "3",
    title: "Why Tailwind CSS is Awesome",
    slug: { current: "why-tailwind-css-is-awesome" },
    publishedAt: "2024-05-20T09:15:00Z",
    excerpt: "Utility-first CSS is changing the way we build user interfaces, enabling rapid prototyping and consistent design systems.",
    body: [],
    mainImage: null,
    author: {
      name: "Bob Johnson",
      image: null,
      bio: "Frontend Engineer",
    },
  },
  {
    _id: "4",
    title: "Building Scalable APIs with Node.js",
    slug: { current: "building-scalable-apis" },
    publishedAt: "2024-06-01T11:00:00Z",
    excerpt: "Learn how to structure your backend application for maximum performance and maintainability.",
    body: [],
    mainImage: null,
    author: {
      name: "Alice Williams",
      image: null,
      bio: "Backend Architect",
    },
  },
  {
    _id: "5",
    title: "The Rise of Edge Computing",
    slug: { current: "rise-of-edge-computing" },
    publishedAt: "2024-06-05T08:00:00Z",
    excerpt: "How deploying code closer to the user is revolutionizing latency and user experience on the web.",
    body: [],
    mainImage: null,
    author: {
        name: "David Lee",
        image: null,
        bio: "DevOps Engineer",
    }
  },
   {
    _id: "6",
    title: "Understanding React Server Components",
    slug: { current: "react-server-components" },
    publishedAt: "2024-06-10T15:45:00Z",
    excerpt: "A comprehensive guide to the biggest paradigm shift in the React ecosystem in years.",
    body: [],
    mainImage: null,
    author: {
        name: "Sarah Jones",
        image: null,
        bio: "Full Stack Dev",
    }
  }
];
