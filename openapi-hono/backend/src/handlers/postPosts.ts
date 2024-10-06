import { createFactory } from 'hono/factory';
import { zValidator } from '../generated/posts.validator';
import { PostPostsContext } from '../generated/posts.context';
import { postPostsBody } from '../generated/posts.zod';

const factory = createFactory();


export const postPostsHandlers = factory.createHandlers(
zValidator('json', postPostsBody),
async (c: PostPostsContext) => {

  },
);
