export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  image?: string;
  team: string;
  loginGoogle: boolean;
};

export type SimpleUser = Pick<User, 'username' | 'name' | 'image'>;
