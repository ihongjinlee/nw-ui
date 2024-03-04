import PageContext from '@/context/PageContext';
import PostSearch from '@/components/PostSearch';

type Props = { params: { keyword: string } };

export default function SearchTagPage({ params: { keyword } }: Props) {
  return (
    <PageContext>
      <PostSearch keyword={keyword} url={'/api/searchtag/'} category='태그' />
    </PageContext>
  );
}
