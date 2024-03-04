'use client';

import UIDetail from '@/components/UIDetail';
import UIList from '@/components/UIList';
import { CacheUIContext } from '@/context/CacheUIContext';

type Props = { params: { id: string } };

export default function UIPage({ params: { id } }: Props) {
  return (
    <div className='flex'>
      <CacheUIContext.Provider value={{ id: `${id}` }}>
        <UIList />
        <UIDetail />
      </CacheUIContext.Provider>
    </div>
  );
}
