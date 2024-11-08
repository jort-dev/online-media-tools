import { defineConfig } from 'vite' //intellisense
import { viteSingleFile } from 'vite-plugin-singlefile'; 
export default defineConfig({
    plugins: [viteSingleFile()],
})