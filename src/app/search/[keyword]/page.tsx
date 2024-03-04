import PageContext from '@/context/PageContext';
import PostSearch from '@/components/PostSearch';

type Props = { params: { keyword: string } };

export default function SearchPage({ params: { keyword } }: Props) {
  return (
    <PageContext>
      <PostSearch keyword={keyword} url={'/api/search/'} category='' />
    </PageContext>
  );
}
