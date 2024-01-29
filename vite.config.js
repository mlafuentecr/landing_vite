// vite.config.js
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import { defineConfig } from 'vite';

export default defineConfig({
	dev: {
		outDir: './public/',
	},
	build: {
		outDir: './public/',
	},
	css: {
		preprocessorOptions: {
			sass: {
				// Additional Sass-related options
				output: 'public/css',
			},
		},
	},
	plugins: [
		ViteImageOptimizer({
			/* pass your config I DONT SEE HOW TO OUTPUT IMAGES IN OTHER FOLDERS*/
			png: {
				quality: 80,
			},
			jpeg: {
				quality: 80,
			},
			jpg: {
				quality: 80,
			},
			tiff: {
				quality: 80,
			},
			// gif does not support lossless compression
			gif: {},
			webp: {
				lossless: true,
			},
		}),
		viteStaticCopy({
			targets: [
				{
					src: './src/images/',
					dest: './assets/images/',
				},
			],
		}),
	],
});
