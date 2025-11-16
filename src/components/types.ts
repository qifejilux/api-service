// types.ts
import { snakeCase } from 'change-case';

export type ApiError = {
  message: string;
  code: number;
  status: number;
  error?: string;
};

export type User = {
  id: number;
  email: string;
  name: string;
  last_name: string;
  phone: string;
  role: string;
  created_at: string;
  updated_at: string;
};

export type Comment = {
  id: number;
  user: User;
  message: string;
  created_at: string;
  updated_at: string;
};

export type Post = {
  id: number;
  title: string;
  description: string;
  body: string;
  user: User;
  comments: Comment[];
  created_at: string;
  updated_at: string;
};

export type PaginatedResponse<T> = {
  items: T[];
  count: number;
};

export type UserUpdate = snakeCase.PascalCaseToCamelCase<{
  email?: string;
  name?: string;
  last_name?: string;
  phone?: string;
  role?: string;
}>;

export type CommentUpdate = snakeCase.PascalCaseToCamelCase<{
  message: string;
}>;

export type PostUpdate = snakeCase.PascalCaseToCamelCase<{
  title?: string;
  description?: string;
  body?: string;
}>;

export type PaginatedUserResponse = PaginatedResponse<User>;
export type PaginatedCommentResponse = PaginatedResponse<Comment>;
export type PaginatedPostResponse = PaginatedResponse<Post>;

export type ApiRequest<T> = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  url: string;
  data?: T;
};