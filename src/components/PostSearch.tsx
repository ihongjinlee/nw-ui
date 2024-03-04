'use client';

import { Post } from '@/model/post';
import { BeatLoader } from 'react-spinners';
import useSWR from 'swr';
import PostListCard from './PostListCard';

type Props = {
  keyword: string;
  url: string;
  category?: string;
};

export default function PostSearch({ keyword, url, category }: Props) {
  const {
    data: posts,
    isLoading: loading,
    error,
  } = useSWR<Post[]>(`${url}${encodeURIComponent(keyword)}`);

  return (
    <section className='w-full mt-10 my-4 flex flex-col items-center'>
      {error && (
        <p className='dark:text-gray-500'>에러가 발생하였습니다. ㅠ_ㅠ</p>
      )}

      {loading && (
        <div className='text-center mt-32'>
          <BeatLoader color='gray' />
        </div>
      )}

      {!loading && !error && posts?.length === 0 && (
        <p className='dark:text-gray-500 font-bold'>
          {`검색 결과가 없습니다.`}
        </p>
      )}
      <div className='mx-8'>
        {!loading && !error && posts && posts.length > 0 && (
          <div className='mt-4 text-center'>
            <p className='dark:text-gray-100 text-3xl font-bold'>{`${category} 검색 결과 : '${decodeURIComponent(
              keyword
            )}' ${posts.length}개`}</p>
          </div>
        )}

        <div className='my-10'>
          <ul className='grid grid-cols-1 gap-4'>
            {posts &&
              posts.map((post) => (
                <li key={post.upkfla}>
                  <PostListCard post={post} />
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
