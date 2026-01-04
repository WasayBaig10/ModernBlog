'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Post } from '@/lib/interface';
import { Calendar, ArrowRight } from 'lucide-react';

import { urlFor } from '@/lib/image';
import Image from 'next/image';

export function PostList({ posts }: { posts: Post[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
                <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                    <Link href={`/blog/${post.slug.current}`} className="group block h-full">
                        <article className="h-full flex flex-col bg-background rounded-2xl border border-border/40 hover:border-border/80 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
                            {/* Image Section */}
                            {post.mainImage ? (
                                <div className="relative h-52 w-full overflow-hidden bg-muted">
                                    <Image
                                        src={urlFor(post.mainImage).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ) : (
                                <div className="h-52 w-full bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
                                    <span className="text-6xl opacity-10 font-bold">{post.title.charAt(0)}</span>
                                </div>
                            )}

                            {/* Content Section */}
                            <div className="flex-1 flex flex-col p-6 space-y-4">
                                {/* Title */}
                                <h2 className="text-xl font-semibold leading-snug tracking-tight group-hover:text-primary transition-colors duration-200 line-clamp-2">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                                    {post.excerpt}
                                </p>

                                {/* Meta */}
                                <div className="flex items-center justify-between pt-4 border-t border-border/40">
                                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                        <Calendar className="w-3.5 h-3.5" />
                                        <time>
                                            {new Date(post.publishedAt).toLocaleDateString(undefined, {
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            })}
                                        </time>
                                    </div>
                                    <span className="text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 flex items-center gap-1">
                                        Read
                                        <ArrowRight className="w-4 h-3.5" />
                                    </span>
                                </div>
                            </div>
                        </article>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
}
