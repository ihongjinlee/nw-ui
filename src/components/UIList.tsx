'use client';

import { useEffect, useRef } from 'react';
import useUIListScrollActions from '@/hooks/useUIListScrollActions';
import useUIListScroll from '@/hooks/useUIListScroll';
import useSWR from 'swr';
import { BeatLoader } from 'react-spinners';
import UIListItem from './UIListItem';
import { UI } from '@/model/ui';
import SWFLength from './SWFLength';

export default function UIList() {
  const { data, isLoading: loading } = useSWR<UI[]>('/api/ui');

  const scrollRef = useRef<HTMLUListElement>(null);

  const { setScrollPosition } = useUIListScrollActions();
  const scrollPostion = useUIListScroll();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollPostion;
    }
  }, [scrollPostion]);

  const handleScroll = (e: React.UIEvent<HTMLUListElement>) => {
    setScrollPosition(e.currentTarget.scrollTop);
  };

  return (
    <section className='w-[900px]'>
      {loading && (
        <div className='text-center mt-40'>
          <BeatLoader color='gray' />
        </div>
      )}

      <ul
        className={`container mx-auto p-2 h-[calc(100vh-90px)] overflow-x-hidden overflow-y-auto`}
        onScroll={handleScroll}
        ref={scrollRef}
      >
        {data && (
          <li className='flex'>
            <SWFLength length={data.length} description='개' />
          </li>
        )}
        {data &&
          data.map(({ upkfla, description, id }, index) => {
            return (
              <li key={index}>
                <UIListItem name={`${upkfla}(${description})`} id={id} />
              </li>
            );
          })}
      </ul>
    </section>
  );
}
