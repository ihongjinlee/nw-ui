import { FormEvent, useState } from 'react';

type Props = {
  onPostTagLabel: (taglabel: string) => void;
};

export default function TagLabeltForm({ onPostTagLabel }: Props) {
  const [tag, setTag] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleKeyUp = (e: any) => {
    const key = e.code;

    switch (key) {
      case 'Enter':
      case 'NumpadEnter':
        if (tag === '') {
          return;
        }

        onPostTagLabel(tag);
        setTag('');
        break;
    }
  };

  return (
    <form onSubmit={handleSubmit} className='border-neutral-300 text-gray-300'>
      <input
        className='w-full border bg-zinc-800 outline-none p-3'
        type='text'
        placeholder='태그를 입력하고 엔터키로 추가하세요.'
        required
        autoFocus
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </form>
  );
}
