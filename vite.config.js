// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
	dev: {
		outDir: './public/js/', // Set the output directory to 'public'
	},
	build: {
		outDir: './public/js/', // Set the output directory to 'public'
	},
	css: {
		preprocessorOptions: {
			sass: {
				// Additional Sass-related options
				output: 'public/css',
			},
		},
	},
});
