'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { AuthorWithPosts } from '@/lib/interface';
import { urlFor } from '@/lib/image';
import { FileText, User } from 'lucide-react';
import { deriveAuthorCategory, getCategoryColor, getCategoryIcon } from '@/lib/categories';

export function AuthorCard({ author }: { author: AuthorWithPosts }) {
    const category = deriveAuthorCategory(author);
    const categoryColor = getCategoryColor(category);
    const categoryIcon = getCategoryIcon(category);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <Link href={`/authors/${author.slug?.current || author._id}`} className="group block">
                <article className="bg-background rounded-2xl border border-border/40 hover:border-border/80 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 h-full">
                    {/* Author Image Section */}
                    <div className="relative h-48 w-full overflow-hidden bg-muted">
                        {author.image ? (
                            <Image
                                src={urlFor(author.image).url()}
                                alt={author.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        ) : (
                            <div className="h-full w-full bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 flex items-center justify-center">
                                <User className="w-16 h-16 text-primary/20" />
                            </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Category Badge */}
                        <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${categoryColor} flex items-center gap-1.5`}>
                                <span>{categoryIcon}</span>
                                <span>{category}</span>
                            </span>
                        </div>

                        {/* Author Name Overlay */}
                        <div className="absolute bottom-4 left-4 right-4">
                            <h2 className="text-2xl font-bold text-white drop-shadow-lg">
                                {author.name}
                            </h2>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 space-y-4">
                        {/* Bio */}
                        {author.bio && (
                            <p className="text-sm text-muted-foreground line-clamp-3">
                                {typeof author.bio === 'string'
                                    ? author.bio
                                    : author.bio.map((block: any) => block.children?.map((child: any) => child.text).join('')).join(' ')
                                }
                            </p>
                        )}

                        {/* Posts Count */}
                        <div className="flex items-center justify-between pt-4 border-t border-border/40">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <FileText className="w-4 h-4" />
                                <span>
                                    {author.posts.length} {author.posts.length === 1 ? 'post' : 'posts'}
                                </span>
                            </div>
                            <span className="text-sm font-medium text-primary opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                                View Profile →
                            </span>
                        </div>
                    </div>
                </article>
            </Link>
        </motion.div>
    );
}
