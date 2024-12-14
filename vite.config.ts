import { sveltekit } from '@sveltejs/kit/vite';
import { type ViteDevServer, defineConfig } from 'vite'

import { Server } from 'socket.io';

const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server: ViteDevServer) {
		if (!server.httpServer) return
    const io = new Server(server.httpServer)

		io.on('connection', (socket) => {
			socket.emit('connected', 'Hello, World 👋')
  socket.on('messageCreate', (message, id) => { 
    io.emit('message', message, id);
    console.log(`message sent, ${message}`)
  });
		})
	}
}

export default defineConfig({
	plugins: [sveltekit(), webSocketServer]
});
