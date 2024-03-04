import { SimpleUser } from './user';

export type TagLabel = {
  taglabel: string;
  username: string;
  image?: string | undefined;
};

export type Post = {
  id: string;
  upkfla: string;
  username: string;
  description?: string;
  taglabels: TagLabel[];
  memo?: string;
  uiurl?: string;
  apiurl?: string;
  images?: [];
  releasedate: string;
  design?: SimpleUser[];
  business?: SimpleUser[];
  ui?: SimpleUser[];
  gfx?: SimpleUser[];
  client?: SimpleUser[];
  server?: SimpleUser[];
  audio?: SimpleUser[];
  qa?: SimpleUser[];
};
