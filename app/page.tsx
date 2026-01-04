import { getPosts } from '@/lib/client';
import { Header } from '@/components/Header';
import { PostList } from '@/components/PostList';

export default async function Home() {
    const posts = await getPosts();

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />
            <div className="max-w-6xl mx-auto p-4 py-8">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-in text-balance mb-4">
                        Welcome to the Modern Blog
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Built with Next.js 15, Tailwind, and Framer Motion.
                    </p>
                </div>
                <PostList posts={posts} />
            </div>
        </main>
    );
}
