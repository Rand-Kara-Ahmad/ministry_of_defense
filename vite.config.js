import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: "/ministry_of_defense_front_end",
    optimizeDeps: {
        exclude: ['js-big-decimal'],
    }
})
