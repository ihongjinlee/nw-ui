import { Post } from '@/model/post';
import { client, urlFor } from './sanity';

const commonPost = `
  ...,
  "id":_id,  
  taglabels[]{taglabel, "username": author->username, "image": author->image},
  "images": screenshots,
  design[]->{username, name, image}, 
  business[]->{username, name, image},
  ui[]->{username, name, image}, 
  gfx[]->{username, name, image},
  client[]->{username, name, image},
  server[]->{username, name, image},
  audio[]->{username, name, image},
  qa[]->{username, name, image}
`;

export async function getUIList() {
  return client.fetch(
    `
  *[_type=="post"]
  | order(upkfla asc){
    ...,
    "id":_id
  }
  `
  );
}

export async function getPost(id: string) {
  return client
    .fetch(
      `*[_type=="post" && _id=="${id}"][0]{
        ...,
        "id":_id,
        taglabels[]{taglabel, "username": author->username, "image": author->image},
        "images": screenshots,
        design[]->{username, name, image}, 
        business[]->{username, name, image},
        ui[]->{username, name, image}, 
        gfx[]->{username, name, image},
        client[]->{username, name, image},
        server[]->{username, name, image},
        audio[]->{username, name, image},
        qa[]->{username, name, image}        
      }`
    )
    .then((post: Post) => ({
      ...post,
      images: post.images?.map((image) => urlFor(image)),
    }));
}

export async function getPosts() {
  return client
    .fetch(
      `
  *[_type=="post"]
  | order(releasedate desc){
  ${commonPost}
  }
  `
    )
    .then((posts) =>
      posts.map((post: Post) => ({
        ...post,
        images: post.images?.map((image) => urlFor(image)),
      }))
    );
}

export async function getPostsLength() {
  return client.fetch(`
  count(*[_type=="post"])
  `);
}

export async function getPostsOf(username: string) {
  return client
    .fetch(
      `
    *[_type=="post" && (design[0]->username == "${username}" || 
      business[0]->username == "${username}" || business[1]->username == "${username}" ||
      ui[0]->username == "${username}" || ui[1]->username == "${username}" || 
      gfx[0]->username == "${username}" || gfx[1]->username == "${username}" ||
      client[0]->username == "${username}" ||
      server[0]->username == "${username}" ||
      qa[0]->username == "${username}" ||
      audio[0]->username == "${username}"
      )]
    | order(releasedate desc){
    ${commonPost}
    }    
    `
    )
    .then((posts) =>
      posts.map((post: Post) => ({
        ...post,
        images: post.images?.map((image) => urlFor(image)),
      }))
    );
}

export async function searchPosts(keyword?: string) {
  return client
    .fetch(
      `
  *[_type == "post" && ( 
      description match "*${keyword}*"
  ) || (upkfla match "*${keyword}*") ]
  | order(upkfla asc){
  ${commonPost}
  }  
  `
    )
    .then((posts) =>
      posts.map((post: Post) => ({
        ...post,
        images: post.images?.map((image) => urlFor(image)),
      }))
    );
}

export async function searchPostsTag(taglabel?: string) {
  return client
    .fetch(
      `
  *[_type == "post" && "${taglabel}" in taglabels[].taglabel]
  | order(upkfla asc){
  ${commonPost}
  }  
  `
    )
    .then((posts) =>
      posts.map((post: Post) => ({
        ...post,
        images: post.images?.map((image) => urlFor(image)),
      }))
    );
}

export async function addTagLabel(
  postId: string,
  userId: string,
  taglabel: string
) {
  return client
    .patch(postId) //
    .setIfMissing({ taglabels: [] })
    .append('taglabels', [
      {
        taglabel,
        author: { _ref: userId, _type: 'reference' },
      },
    ])
    .commit({ autoGenerateArrayKeys: true });
}

export async function deleteTagLabel(postId: string, taglabel: string) {
  return client
    .patch(postId) //
    .unset([`taglabels[taglabel=="${taglabel}"]`])
    .commit({ autoGenerateArrayKeys: true });
}
