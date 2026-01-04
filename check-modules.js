try {
    const tailwind = require('tailwindcss');
    const autoprefixer = require('autoprefixer');
    console.log('Modules loaded successfully');
    console.log('Tailwind version:', require('tailwindcss/package.json').version);
} catch (e) {
    console.error('Failed to load modules:', e);
}
