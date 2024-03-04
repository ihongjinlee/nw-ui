import { generateRandomString } from '@/util/str';
import Avatar from './Avatar';

type Props = {
  image?: string;
  name: string;
};

export default function PostUserAvatar({ image, name }: Props) {
  return (
    <div className='flex flex-col gap-1 mt-1 ml-2 mr-4 text-center'>
      <Avatar image={image} size='medium' />
      <div className='text-gray-900 dark:text-gray-400 font-bold text-sm'>
        {generateRandomString(name.length)}
      </div>
    </div>
  );
}
