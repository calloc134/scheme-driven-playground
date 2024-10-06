import { createFactory } from 'hono/factory';
import { zValidator } from '../generated/posts.validator';
import { GetPostsContext } from '../generated/posts.context';
import { getPostsResponse } from '../generated/posts.zod';

const factory = createFactory();


export const getPostsHandlers = factory.createHandlers(
zValidator('response', getPostsResponse),
async (c: GetPostsContext) => {

  },
);
