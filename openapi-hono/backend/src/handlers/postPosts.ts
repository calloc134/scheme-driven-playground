import { createFactory } from 'hono/factory';
import { zValidator } from '../types-and-zod/posts.validator';
import { PostPostsContext } from '../types-and-zod/posts.context';
import { postPostsBody } from '../types-and-zod/posts.zod';

const factory = createFactory();


export const postPostsHandlers = factory.createHandlers(
zValidator('json', postPostsBody),
async (c: PostPostsContext) => {

  },
);
