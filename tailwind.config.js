/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", // Main App file
    "./app/**/*.{js,jsx,ts,tsx}", // All files in the 'app' directory, including '(tabs)'
    "./app/(tabs)/**/*.{js,jsx,ts,tsx}", // All files in the 'app' directory, including '(tabs)'
    "./app/(tabs)/*.{js,jsx,ts,tsx}", // All files in the 'app' directory, including '(tabs)'
    "./components/**/*.{js,jsx,ts,tsx}", // Include components if you use Tailwind there
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  include: ["nativewind-env.d.ts"],
};
