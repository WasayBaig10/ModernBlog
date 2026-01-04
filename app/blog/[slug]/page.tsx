// import { getPost } from '@/lib/client';
// import { Header } from '@/components/Header';
// import { notFound } from 'next/navigation';

// import Link from 'next/link';
// import Image from 'next/image';
// import { urlFor } from '@/lib/image';
// import { PortableText } from '@portabletext/react';

// export default async function PostPage(props: { params: Promise<{ slug: string }> }) {
//     const params = await props.params;
//     const post = await getPost(params.slug);

//     if (!post) {
//         notFound();
//     }

//     return (
//         <main className="min-h-screen">
//             <Header />
//             <article className="max-w-3xl mx-auto p-4 py-12">
//                 <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
//                     &larr; Back to Home
//                 </Link>

//                 {post.mainImage && (
//                     <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
//                         <Image
//                             src={urlFor(post.mainImage).url()}
//                             alt={post.title}
//                             fill
//                             className="object-cover"
//                             priority
//                         />
//                     </div>
//                 )}

//                 <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
//                 <div className="flex items-center gap-4 text-muted-foreground mb-8 border-b border-border pb-8">
//                     <span>{post.author.name}</span>
//                     <span>•</span>
//                     <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
//                 </div>
//                 <div className="prose prose-lg dark:prose-invert max-w-none">
//                     {post.body ? (
//                         <PortableText value={post.body} />
//                     ) : (
//                         <p>{post.excerpt}</p>
//                     )}
//                 </div>
//             </article>
//         </main>
//     );
// }

import { getPost, getPosts } from '@/lib/client';
import { Header } from '@/components/Header';
import { notFound } from 'next/navigation';

import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/image';
import { PortableText } from '@portabletext/react';

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
    const posts = await getPosts();
    return posts.map((post) => ({
        slug: post.slug.current,
    }));
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) {
        notFound(); // Next.js 404
    }

    return (
        <main className="min-h-screen">
            <Header />
            <article className="max-w-3xl mx-auto p-4 py-12">
                <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    &larr; Back to Home
                </Link>

                {post.mainImage && (
                    <div className="relative w-full h-64 md:h-96 mb-8 rounded-xl overflow-hidden shadow-lg">
                        <Image
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-8 border-b border-border pb-8">
                    <span>{post.author?.name || 'Unknown Author'}</span>
                    <span>•</span>
                    <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
                </div>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {post.body ? (
                        <PortableText value={post.body} />
                    ) : (
                        <p>{post.excerpt}</p>
                    )}
                </div>
            </article>
        </main>
    );
}
