import { getAuthorsWithPosts } from '@/lib/client';
import { Header } from '@/components/Header';
import { AuthorCard } from '@/components/AuthorCard';
import { AuthorWithPosts } from '@/lib/interface';

export default async function AuthorsPage() {
    const authors = await getAuthorsWithPosts();

    // Filter authors that have at least one post
    const authorsWithPosts = authors.filter((author: AuthorWithPosts) => author.posts && author.posts.length > 0);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="max-w-6xl mx-auto p-4 py-8">
                {/* Header Section */}
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-in text-balance mb-4">
                        Meet Our Authors
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Discover the talented writers behind our blog posts. Each author brings unique expertise and perspectives across various topics.
                    </p>
                </div>

                {/* Authors Grid */}
                {authorsWithPosts.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {authorsWithPosts.map((author, index) => (
                                <AuthorCard key={author._id} author={author} />
                            ))}
                        </div>

                        {/* Stats Section */}
                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-card rounded-xl border border-border/40 p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {authorsWithPosts.length}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Active Authors
                                </div>
                            </div>
                            <div className="bg-card rounded-xl border border-border/40 p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {authorsWithPosts.reduce((acc: number, author: AuthorWithPosts) => acc + author.posts.length, 0)}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Total Posts
                                </div>
                            </div>
                            <div className="bg-card rounded-xl border border-border/40 p-6 text-center">
                                <div className="text-3xl font-bold text-primary mb-2">
                                    {Math.round(authorsWithPosts.reduce((acc: number, author: AuthorWithPosts) => acc + author.posts.length, 0) / authorsWithPosts.length)}
                                </div>
                                <div className="text-sm text-muted-foreground">
                                    Avg. Posts per Author
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="text-center py-16">
                        <p className="text-xl text-muted-foreground">
                            No authors found. Check back soon!
                        </p>
                    </div>
                )}
            </div>
        </main>
    );
}
