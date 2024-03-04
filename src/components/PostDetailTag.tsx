import { Post } from '@/model/post';
import Tag from './ui/Tag';
import TagIcon from './ui/icons/TagIcon';
import TagLabeltForm from './TagLabelForm';
import usePost from '@/hooks/post';
import useMe from '@/hooks/me';

type Props = {
  post: Post;
};

export default function PostDetailTag({ post }: Props) {
  const { id, upkfla, description } = post;
  const { post: data, postTagLabel, deleteTagLabel } = usePost(id);
  const taglabels = data?.taglabels;
  const { user } = useMe();

  const handleAddTagLabel = (taglabel: string) => {
    if (taglabels) {
      if (taglabels.find((item) => item.taglabel === taglabel)) {
        alert('이미 등록된 태그입니다.');
        return;
      }
    }

    user &&
      postTagLabel({ taglabel, username: user.username, image: user.image });
  };

  const handleDeleteTagLabel = (taglabel: string) => {
    user && deleteTagLabel(taglabel);
  };

  return (
    <section className='relative w-full h-full bg-zinc-900'>
      <div className='flex p-1 text-white'>
        <div className='m-4'>
          <TagIcon />
        </div>
        <div className='mt-3 text-2xl font-bold'>태그 추가 / 삭제</div>
      </div>
      <div className='border border-zinc-800' />
      <div className='m-8 text-2xl'>
        <TagLabeltForm onPostTagLabel={handleAddTagLabel} />
      </div>
      <div className='flex m-8 gap-2'>
        {taglabels?.map(({ taglabel }, index) => (
          <Tag
            key={index}
            text={`${taglabel}`}
            onClick={handleDeleteTagLabel}
          />
        ))}
      </div>
      <p className='mx-8 mt-4 text-red-500 text-1xl'>
        📢 태그를 클릭하면 삭제됩니다.
      </p>
    </section>
  );
}
