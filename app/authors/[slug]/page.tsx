import { getAuthorBySlug, getAuthorsWithPosts } from '@/lib/client';
import { Header } from '@/components/Header';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/image';
import { PortableText } from '@portabletext/react';
import { AuthorWithPosts, AuthorPost } from '@/lib/interface';

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
    const authors = await getAuthorsWithPosts();
    return authors.map((author: AuthorWithPosts) => ({
        slug: author.slug?.current || author._id,
    }));
}

export default async function AuthorPage({ params }: Props) {
    const { slug } = await params;
    const author = await getAuthorBySlug(slug);

    if (!author) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-background">
            <Header />
            <div className="max-w-6xl mx-auto p-4 py-12">
                <Link href="/authors" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
                    &larr; Back to Authors
                </Link>

                {/* Author Profile Section */}
                <div className="bg-card rounded-xl p-8 mb-8 shadow-lg border border-border">
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        {author.image ? (
                            <Image
                                src={urlFor(author.image).width(300).height(300).url()}
                                alt={author.name}
                                width={160}
                                height={160}
                                className="rounded-full object-cover flex-shrink-0"
                                priority
                            />
                        ) : null}
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{author.name}</h1>
                            {author.bio && (
                                <div className="prose dark:prose-invert max-w-none text-muted-foreground mb-4">
                                    {Array.isArray(author.bio) ? (
                                        <PortableText value={author.bio} />
                                    ) : (
                                        <p>{author.bio}</p>
                                    )}
                                </div>
                            )}
                            <div className="text-sm text-muted-foreground">
                                {author.posts?.length || 0} {author.posts?.length === 1 ? 'post' : 'posts'}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Posts by Author */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Posts by {author.name}</h2>
                    {author.posts && author.posts.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {author.posts.map((post: AuthorPost) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug.current}`}
                                    className="group block"
                                >
                                    <article className="bg-card rounded-xl overflow-hidden shadow-md border border-border transition-all hover:shadow-lg">
                                        {post.mainImage ? (
                                            <div className="relative w-full h-48 overflow-hidden bg-muted">
                                                <Image
                                                    src={urlFor(post.mainImage).width(600).height(400).url()}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover transition-transform group-hover:scale-105"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                />
                                            </div>
                                        ) : (
                                            <div className="relative w-full h-48 overflow-hidden bg-muted flex items-center justify-center">
                                                <span className="text-muted-foreground text-sm">No image</span>
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>
                                            {post.excerpt && (
                                                <p className="text-muted-foreground line-clamp-3 mb-4">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                            <time className="text-sm text-muted-foreground">
                                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </time>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-card rounded-xl border border-border">
                            <p className="text-muted-foreground">No posts by this author yet.</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
