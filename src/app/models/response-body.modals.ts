export interface ResponseBody<T> {
  data: T;
  metadata: Metadata;
}

export interface Metadata {
  message: string;
  status: number;
  errorCode: string;
  reasons: string | object;
}
