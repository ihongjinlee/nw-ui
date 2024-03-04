import { Update } from '@/service/update';

type Props = {
  update: Update[];
};

export default function Update({ update }: Props) {
  return (
    <section className='flex w-full justify-center'>
      <div className='flex'>
        <h1 className='dark:text-gray-400 text-3xl mr-20'>UPDATE </h1>
      </div>
      <dl className='text-gray-800 dark:text-gray-400'>
        {update.map(({ version, date, description }) => (
          <ul key={version} className='mb-4'>
            <div className='flex items-end'>
              <h1 className='dark:text-gray-100 text-2xl'>{`ver ${version}`}</h1>
              <p className='text-sm ml-2'>{`${date}`}</p>
            </div>
            {description.map((item: string) => (
              <p key={item} className='text-sm'>{`- ${item}`}</p>
            ))}
          </ul>
        ))}
      </dl>
    </section>
  );
}
