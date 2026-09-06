import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    kicker: z.string(),
    summary: z.string(),
    year: z.number(),
    status: z.string(),
    role: z.string(),
    team: z.string(),
    featured: z.boolean().default(true),
    order: z.number(),
    tags: z.array(z.string()),
    metrics: z.array(z.object({ label: z.string(), value: z.string() })),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
  }),
});

export const collections = { projects };
