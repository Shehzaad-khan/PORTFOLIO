/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Poppins', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            colors: {
                bg: {
                    light: '#F8FAFC', // Slate-50: 60% Base
                    white: '#FFFFFF', // Card bg
                },
                text: {
                    primary: '#0F172A', // Slate-900: Dark text
                    secondary: '#475569', // Slate-600: Muted text
                },
                accent: {
                    DEFAULT: '#4F46E5', // Indigo-600: Vibrant Primary
                    hover: '#4338CA',   // Indigo-700
                    light: '#E0E7FF',   // Indigo-100: Soft background
                }
            },
        },
    },
    plugins: [],
}
