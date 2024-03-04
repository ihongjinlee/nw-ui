import { TagLabel, Post } from '@/model/post';
import { useCallback } from 'react';
import useSWR, { useSWRConfig } from 'swr';

async function addTagLabel(id: string, taglabel: string) {
  return fetch('/api/taglabels', {
    method: 'POST',
    body: JSON.stringify({ id, taglabel }),
  }).then((res) => res.json());
}

async function removeTagLabel(id: string, taglabel: string) {
  return fetch('/api/taglabels', {
    method: 'PUT',
    body: JSON.stringify({ id, taglabel }),
  }).then((res) => res.json());
}

export default function usePost(postId: string) {
  const {
    data: post,
    isLoading,
    error,
    mutate,
  } = useSWR<Post>(`/api/posts/${postId}`);

  const { mutate: globalMutate } = useSWRConfig();

  const postTagLabel = useCallback(
    (taglabel: TagLabel) => {
      if (!post) return;

      const newPost =
        post.taglabels == null
          ? {
              ...post,
              taglabels: [taglabel],
            }
          : {
              ...post,
              taglabels: [...post.taglabels, taglabel],
            };

      return mutate(addTagLabel(post.id, taglabel.taglabel), {
        optimisticData: newPost,
        populateCache: false,
        revalidate: false,
        rollbackOnError: true,
      }).then(() => globalMutate('/api/posts'));
    },
    [post, mutate, globalMutate]
  );

  const deleteTagLabel = useCallback(
    (taglabel: string) => {
      if (!post) return;

      const newPost = {
        ...post,
        taglabels: post.taglabels.filter(
          (item: TagLabel) => item.taglabel !== taglabel
        ),
      };

      return mutate(removeTagLabel(post.id, taglabel), {
        optimisticData: newPost,
        populateCache: false,
        revalidate: false,
        rollbackOnError: true,
      }).then(() => globalMutate('/api/posts'));
    },
    [post, mutate, globalMutate]
  );

  return { post, isLoading, error, postTagLabel, deleteTagLabel };
}
