// types.ts

import { Application } from 'express';

// Define a type for API request body
type ApiRequestBody = {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  role?: string;
};

// Define a type for API response
type ApiResponse = {
  status: number;
  message: string;
  data?: any;
};

// Define a type for API request query parameters
type ApiRequestQueryParams = {
  limit?: number;
  offset?: number;
};

// Define a type for API request headers
type ApiRequestHeaders = {
  'Content-Type': string;
  Authorization?: string;
};

// Define a type for the Express application
type App = Application;

// Define a type for a database model
type Model = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

// Define a type for a user model
type User = Model & {
  createdAt: Date;
  updatedAt: Date;
};

// Define a type for a project model
type Project = Model & {
  users: User[];
  createdAt: Date;
  updatedAt: Date;
};

// Define a type for a task model
type Task = Model & {
  project: Project;
  user: User;
  status: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
};