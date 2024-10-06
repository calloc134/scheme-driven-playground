import { createFactory } from 'hono/factory';
import { zValidator } from '../types-and-zod/posts.validator';
import { GetPostsContext } from '../types-and-zod/posts.context';
import { getPostsResponse } from '../types-and-zod/posts.zod';

const factory = createFactory();


export const getPostsHandlers = factory.createHandlers(
zValidator('response', getPostsResponse),
async (c: GetPostsContext) => {

  },
);
