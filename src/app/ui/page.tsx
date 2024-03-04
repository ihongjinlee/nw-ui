import UIList from '@/components/UIList';

export const metadata = {
  title: 'NW UI | UI 목록',
  description: 'NW UI 목록',
};

export default function UIPage() {
  return (
    <div className='flex'>
      <UIList />
      <p className='flex w-full justify-center items-center text-2xl dark:text-gray-500'>
        UI를 선택해 주세요.
      </p>
    </div>
  );
}
