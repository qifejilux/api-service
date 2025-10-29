// types.ts

export type ApiError = {
  code: string;
  message: string;
};

export type RpcRequest = {
  method: string;
  params?: any[];
  id: number;
};

export type RpcResponse = {
  result: any;
  error?: ApiError;
  id: number;
};