const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // We'll use a custom 'light' variant instead of Tailwind's 'dark'
  // to match your existing theme-toggling JavaScript.
  darkMode: 'class',

  content: [
    './index.html', // Tells Tailwind to scan your HTML file for classes
  ],

  theme: {
    extend: {
      fontFamily: {
        // Sets 'Inter' as the default sans-serif font
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        // Your primary accent color
        primary: '#3297F3',

        // --- DARK THEME (Default) ---
        // These are the default colors (when .light is not present)
        background: '#0D1117',
        surface: '#161B22',      // from --surface-1
        strong: '#f0f6fc',        // from --text-heading
        body: '#c9d1d9',          // from --text-body
        subtle: '#8b949e',        // from --text-subtle
        'skill-border': '#30363d',

        // --- LIGHT THEME ---
        // These colors will be applied with the 'light:' prefix
        light: {
          background: '#FFFFFF',
          surface: '#f8f9fa',
          strong: '#212529',
          body: '#495057',
          subtle: '#6c757d',
          'skill-border': '#dee2e6',
        }
      },
    },
  },

  plugins: [
    // This custom plugin adds the 'light:' variant
    // which activates when the .light class is on an ancestor (like <html>)
    function({ addVariant }) {
      addVariant('light', '.light &');
    }
  ],
};
