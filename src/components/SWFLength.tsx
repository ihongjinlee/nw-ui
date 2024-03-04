import Link from 'next/link';

type Props = {
  length: number;
  description: string;
  href?: string;
};

export default function SWFLength({ length, description, href = '' }: Props) {
  return (
    <section className='flex justify-center items-end'>
      <div className='text-4xl font-bold text-gray-900 dark:text-yellow-500'>
        <Link className={`${href === '' && 'cursor-default'}`} href={href}>
          {length}
        </Link>
      </div>
      <div className='text-gray-900 dark:text-gray-400'>{description}</div>
    </section>
  );
}
