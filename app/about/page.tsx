import { Header } from '@/components/Header';

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />
            <div className="container max-w-4xl mx-auto p-4 py-12">
                <h1 className="text-4xl font-bold mb-6">About ModernBlog</h1>
                <div className="prose prose-lg dark:prose-invert">
                    <p className="text-xl text-muted-foreground mb-8">
                        We are a collective of developers, designers, and creators passionate about the future of the web.
                    </p>
                    <p>
                        Founded in 2024, ModernBlog aims to provide high-quality tutorials, insights, and opinion pieces on the latest web technologies. From Next.js and React to serverless architecture and edge computing, we cover it all.
                    </p>
                    <p>
                        Our mission is to empower developers to build better, faster, and more accessible websites. We believe in open source, community learning, and the power of sharing knowledge.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Our Tech Stack</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Next.js 15:</strong> The latest features of the App Router and Server Components.</li>
                        <li><strong>Tailwind CSS:</strong> Utility-first styling for rapid development.</li>
                        <li><strong>Framer Motion:</strong> Smooth, declarative animations.</li>
                        <li><strong>Sanity.io:</strong> Flexible content management.</li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
