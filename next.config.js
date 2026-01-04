/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enable static export for GitHub Pages
    images: {
        domains: ['cdn.sanity.io'], // Add this line
        unoptimized: true, // Required for static export
    },
    compiler: {
        styledComponents: true,
    },
    transpilePackages: ['sanity', 'next-sanity', '@sanity/vision', '@sanity/client', '@sanity/image-url', 'rxjs'],
    basePath: '/ModernBlog', // GitHub Pages repository name
    assetPrefix: '/ModernBlog', // GitHub Pages repository name
};

module.exports = nextConfig;
