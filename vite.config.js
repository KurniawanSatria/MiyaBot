import { defineConfig } from 'vite';


export default defineConfig({
plugins: [],
server: {
host: '0.0.0.0',
allowedHosts: ['localhost', '127.0.0.1', 'c141a296-5e0f-4e9b-93ed-6cd976a73378-00-13hjecyuws40c.sisko.replit.dev'],
hmr: true, 
}
})
