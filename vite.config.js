import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				name: 'Healthy Food App',
				short_name: 'HealthyFood',
				description: 'An app for healthy food recipes',
				theme_color: '#ffffff',
				icons: [
					{
						src: '/icons8-green-apple-96_192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/icons8-green-apple-96_1_512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
				],
			},
		}),
	],
});
