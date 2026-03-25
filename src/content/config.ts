import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.union([z.string(), z.number()])).optional().default([]),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
    author: z.string().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
};
