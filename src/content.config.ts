import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada proyecto es un archivo Markdown en src/content/proyectos.
const proyectos = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/proyectos' }),
	schema: z.object({
		// Nombre de marca opcional; el título queda como descripción.
		marca: z.string().optional(),
		titulo: z.string(),
		resumen: z.string(),
		stack: z.array(z.string()),
		repo: z.string().url().optional(),
		destacado: z.boolean().default(false),
		orden: z.number().default(0),
		// Sin página propia: en la portada enlaza directamente al repositorio.
		pagina: z.boolean().default(true),
	}),
});

export const collections = { proyectos };
