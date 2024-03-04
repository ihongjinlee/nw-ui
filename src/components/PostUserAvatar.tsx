import Avatar from './Avatar';

type Props = {
  image?: string;
  name: string;
};

export default function PostUserAvatar({ image, name }: Props) {
  return (
    <div className='flex flex-col gap-1 mt-1 ml-2 mr-4'>
      <Avatar image={image} size='medium' />
      <div className='text-gray-900 dark:text-gray-400 font-bold text-sm'>
        {name}
      </div>
    </div>
  );
}
