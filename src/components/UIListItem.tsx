import Link from 'next/link';
import { useCacheUI } from '@/context/CacheUIContext';

type Props = {
  id: string;
  name: string;
};

export default function UIListItem({ name, id }: Props) {
  const cacheUI = useCacheUI();
  const selected = cacheUI.id === id;

  return (
    <article>
      <Link href={`/ui/${id}`}>
        {!selected && (
          <h1 className={`hover:dark:text-yellow-300 dark:text-gray-400`}>
            {name}
          </h1>
        )}

        {selected && (
          <h1
            className={`hover:dark:text-yellow-300 dark:text-yellow-500 font-bold`}
          >
            {name}
          </h1>
        )}
      </Link>
    </article>
  );
}
