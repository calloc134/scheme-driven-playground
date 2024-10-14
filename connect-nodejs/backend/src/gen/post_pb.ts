// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file post.proto (package postapi, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * Message definitions
 *
 * @generated from message postapi.Post
 */
export class Post extends Message<Post> {
  /**
   * @generated from field: int32 id = 1;
   */
  id = 0;

  /**
   * @generated from field: string title = 2;
   */
  title = "";

  /**
   * @generated from field: string content = 3;
   */
  content = "";

  constructor(data?: PartialMessage<Post>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "postapi.Post";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Post {
    return new Post().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Post {
    return new Post().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Post {
    return new Post().fromJsonString(jsonString, options);
  }

  static equals(a: Post | PlainMessage<Post> | undefined, b: Post | PlainMessage<Post> | undefined): boolean {
    return proto3.util.equals(Post, a, b);
  }
}

/**
 * @generated from message postapi.PostList
 */
export class PostList extends Message<PostList> {
  /**
   * @generated from field: repeated postapi.Post posts = 1;
   */
  posts: Post[] = [];

  constructor(data?: PartialMessage<PostList>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "postapi.PostList";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "posts", kind: "message", T: Post, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostList {
    return new PostList().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostList {
    return new PostList().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostList {
    return new PostList().fromJsonString(jsonString, options);
  }

  static equals(a: PostList | PlainMessage<PostList> | undefined, b: PostList | PlainMessage<PostList> | undefined): boolean {
    return proto3.util.equals(PostList, a, b);
  }
}

/**
 * @generated from message postapi.CreatePostRequest
 */
export class CreatePostRequest extends Message<CreatePostRequest> {
  /**
   * @generated from field: string title = 1;
   */
  title = "";

  /**
   * @generated from field: string content = 2;
   */
  content = "";

  constructor(data?: PartialMessage<CreatePostRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "postapi.CreatePostRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "title", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "content", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePostRequest {
    return new CreatePostRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePostRequest {
    return new CreatePostRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePostRequest {
    return new CreatePostRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CreatePostRequest | PlainMessage<CreatePostRequest> | undefined, b: CreatePostRequest | PlainMessage<CreatePostRequest> | undefined): boolean {
    return proto3.util.equals(CreatePostRequest, a, b);
  }
}

/**
 * @generated from message postapi.CreatePostResponse
 */
export class CreatePostResponse extends Message<CreatePostResponse> {
  /**
   * @generated from field: postapi.Post post = 1;
   */
  post?: Post;

  constructor(data?: PartialMessage<CreatePostResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "postapi.CreatePostResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "post", kind: "message", T: Post },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePostResponse {
    return new CreatePostResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePostResponse {
    return new CreatePostResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePostResponse {
    return new CreatePostResponse().fromJsonString(jsonString, options);
  }

  static equals(a: CreatePostResponse | PlainMessage<CreatePostResponse> | undefined, b: CreatePostResponse | PlainMessage<CreatePostResponse> | undefined): boolean {
    return proto3.util.equals(CreatePostResponse, a, b);
  }
}

