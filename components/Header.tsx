import Link from 'next/link';
import { Github, Sun } from 'lucide-react';
import { Search } from './Search';
import { Suspense } from 'react';
import { ModeToggle } from './ModeToggle';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <div className="flex gap-6 md:gap-10">
                    <Link href="/" className="flex items-center space-x-2">
                        <span className="inline-block font-bold text-xl tracking-tighter">ModernBlog</span>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-4">
                        <div className="hidden md:block">
                            <Suspense fallback={null}>
                                <Search />
                            </Suspense>
                        </div>
                        <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Home
                        </Link>
                        <Link href="/authors" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                            Authors
                        </Link>
                        <div className="flex items-center gap-2 border-l border-border pl-4 ml-2">
                            <ModeToggle />
                            <Link href="https://github.com" target="_blank" className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

