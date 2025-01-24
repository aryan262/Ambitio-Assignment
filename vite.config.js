import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(), tailwindcss()],
// })
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        content: [
          "./src/**/*.{js,jsx,ts,tsx}",
        ],
        theme: {
          extend: {
            keyframes: {
              scroll: {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-100%)' },
              },
            },
            animation: {
              scroll: 'scroll 10s linear infinite',
            },
          },
        },
      }
    }),
  ],
});
