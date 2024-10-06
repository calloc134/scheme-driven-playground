/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Post API
 * OpenAPI spec version: 1.0.0
 */
import { z as zod } from 'zod';

export const getPostsResponseItem = zod.object({
  "id": zod.number().optional(),
  "title": zod.string().optional(),
  "content": zod.string().optional()
}).strict()
export const getPostsResponse = zod.array(getPostsResponseItem)


export const postPostsBody = zod.object({
  "title": zod.string(),
  "content": zod.string()
})

