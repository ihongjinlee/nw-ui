import PageContext from '@/context/PageContext';
import PostList from '@/components/PostList';

export const metadata = {
  title: 'NW UI | 연도별 작업',
  description: 'NW UI 연도별 작업',
};

export default function YearPage() {
  return (
    <PageContext>
      <PostList apiUrl={'/api/posts'} />;
    </PageContext>
  );
}
