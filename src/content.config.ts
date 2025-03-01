import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const carousel = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/carousel" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    url: z.string(),
    link: z.string().optional(),
    order: z.number().default(1),
    active: z.boolean().default(true),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    images: z.array(z.string()).optional(),
    designer: z.string(),
    category: z.string(),
    draft: z.boolean().default(false)
  })
});

export const collections = { carousel, projects };