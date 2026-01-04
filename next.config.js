/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.sanity.io'], // Add this line
    },
    compiler: {
        styledComponents: true,
    },
    transpilePackages: ['sanity', 'next-sanity', '@sanity/vision', '@sanity/client', '@sanity/image-url', 'rxjs'],
};

module.exports = nextConfig;
