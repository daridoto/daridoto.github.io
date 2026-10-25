// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// Las fuentes se descargan al compilar y se sirven desde la propia web.
export default defineConfig({
	site: 'https://daridoto.github.io',
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Geist',
			cssVariable: '--font-sans',
			weights: [400, 500, 800],
			fallbacks: ['system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Geist Mono',
			cssVariable: '--font-mono',
			weights: [400],
			fallbacks: ['ui-monospace', 'monospace'],
		},
		{
			provider: fontProviders.google(),
			name: 'Sedgwick Ave Display',
			cssVariable: '--font-logo',
			weights: [400],
			fallbacks: ['cursive'],
		},
	],
});
