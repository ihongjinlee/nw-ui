'use client';

import { useCacheUI } from '@/context/CacheUIContext';
import { BeatLoader } from 'react-spinners';
import PostListCard from './PostListCard';
import usePost from '@/hooks/post';

export default function UIDetail() {
  const cacheUI = useCacheUI();

  const { post, isLoading: loading } = usePost(cacheUI.id);

  return (
    <section className='flex w-full justify-center items-center'>
      {loading && (
        <div className='text-center'>
          <BeatLoader color='gray' />
        </div>
      )}

      {!loading && post && cacheUI.id !== 'front' && (
        <article
          className={`container mx-auto p-2 h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto`}
        >
          <PostListCard post={post} />
        </article>
      )}
    </section>
  );
}
