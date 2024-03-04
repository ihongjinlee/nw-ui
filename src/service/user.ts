import { client } from './sanity';

type OAuthUser = {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
};

export async function addUser({ id, email, name, username, image }: OAuthUser) {
  return client.createIfNotExists({
    _id: id,
    _type: 'user',
    email,
    name,
    username,
    image,
    team: 'ready',
    bookmarks: [],
    loginGoogle: true,
  });
}

export async function getUsers() {
  return client.fetch(`
  *[_type=="user"]
  | order(team asc){
    ...,
    "id":_id
  }
  `);
}

export async function getUserForProfile(username: string) {
  return client
    .fetch(
      `
      *[_type == "user" && username == "${username}"][0]{
        ...,
        "id":_id
      }
    `
    )
    .then((user) => ({
      ...user,
      posts: user.posts ?? 0,
    }));
}

export async function getUserByUsername(username: string) {
  return client.fetch(
    `*[_type == "user" && username == "${username}"][0]{
      ...,
      "id":_id
    }`
  );
}
