'use client';

import useSWR from 'swr';
import PostListCard from './PostListCard';
import { BeatLoader } from 'react-spinners';
import { Post } from '@/model/post';
import SWFLength from './SWFLength';

type Props = {
  apiUrl: string;
};

export default function PostList({ apiUrl }: Props) {
  const { data: posts, isLoading: loading } = useSWR<Post[]>(apiUrl);

  const year2024 = posts?.filter(
    (post) => post.releasedate.split('-')[0] === '2024'
  );

  const year2023 = posts?.filter(
    (post) => post.releasedate.split('-')[0] === '2023'
  );

  const year2022 = posts?.filter(
    (post) => post.releasedate.split('-')[0] === '2022'
  );

  const year2021 = posts?.filter(
    (post) => post.releasedate.split('-')[0] === '2021'
  );

  return (
    <section className='flex justify-center'>
      {loading && (
        <div className='text-center mt-32'>
          <BeatLoader color='gray' />
        </div>
      )}

      {posts && (
        <div className='mx-8'>
          <div className='mt-4 text-center'>
            <SWFLength length={posts.length} description='개' />
          </div>
          <div className='flex justify-center gap-4 m-4 dark:text-white text-2xl font-bold'>
            <div className='dark:text-green-500'>
              2024 ({year2024?.length}){' '}
            </div>
            <div className='text-gray-700 dark:text-gray-200'>
              2023 ({year2023?.length}){' '}
            </div>
            <div className='text-gray-500 dark:text-gray-400'>
              2022 ({year2022?.length})
            </div>
            <div className='text-gray-300 dark:text-gray-600'>
              2021 ({year2021?.length})
            </div>
          </div>
          <ul className='grid grid-cols-1 gap-4'>
            {posts.map((post, index, posts) => {
              return (
                <li key={post.upkfla}>
                  <PostListCard post={post} priority={index < 2} />

                  {post.releasedate.split('-')[0] !==
                    posts[index + 1]?.releasedate.split('-')[0] && (
                    <h1 className='flex justify-center m-10 text-4xl font-bold dark:text-white'>
                      {post.releasedate.split('-')[0]}
                    </h1>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
}
