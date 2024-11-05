/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                brand_color: '#4AAB3D',
                brand_black: '#1F242C',
                brand_gray: '#F6F6F9',
            },
        },
    },
    plugins: [],
};
