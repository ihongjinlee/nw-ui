'use client';

import { Post } from '@/model/post';
import PostUserAvatar from './PostUserAvatar';
import Image from 'next/image';
import Link from 'next/link';
import copy from 'clipboard-copy';
import Tag from './ui/Tag';
import TagIcon from './ui/icons/TagIcon';
import { useState } from 'react';
import ModalPortal from './ui/ModalPortal';
import PostModal from './PostModal';
import PostDetailTag from './PostDetailTag';
import { generateRandomString } from '@/util/str';

type Props = {
  post: Post;
  priority?: boolean;
};

export default function PostListCard({ post, priority = false }: Props) {
  const {
    design,
    business,
    ui,
    gfx,
    client,
    server,
    audio,
    qa,
    upkfla,
    memo,
    description,
    taglabels,
    images,
    uiurl,
    apiurl,
    releasedate,
  } = post;
  const [openModal, setOpenModal] = useState(false);

  const handleCopyToClipboard = async () => {
    try {
      await copy(upkfla);
    } catch (error) {
      console.error('클립보드 복사 중 오류 발생:', error);
    }
  };

  const handleTag = () => {
    setOpenModal(true);
  };

  return (
    <article
      className={`rounded-lg shadow-md border border-gray-200 dark:border-gray-600
      text-gray-700 dark:text-gray-100`}
    >
      <div className='m-4'>
        <h3 className='mx-2 text-lg dark:text-gray-300'>{`${releasedate}`}</h3>
        <div className='flex'>
          <button
            className='mx-2 mt-2 text-3xl font-bold hover:text-yellow-500'
            onClick={handleCopyToClipboard}
          >{`${generateRandomString(upkfla.length)}`}</button>
          <div className='flex mt-4 gap-2 p-1'>
            {uiurl && (
              <a href={uiurl} target='_blank'>
                <p className='bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg px-2 text-center'>
                  UI
                </p>
              </a>
            )}
            {apiurl && (
              <a href={apiurl} target='_blank'>
                <p className='bg-sky-700 hover:bg-sky-800 text-white rounded-lg px-2 text-center'>
                  GFX
                </p>
              </a>
            )}
          </div>
        </div>
        <h2 className='mx-2 mt-1 text-2xl text-gray-600 dark:text-gray-400'>
          {`${description}`}
        </h2>

        <div className='flex mt-2 mx-2 gap-2'>
          {taglabels?.map(({ taglabel }, index) => (
            <Link key={index} href={`/searchtag/${taglabel}`}>
              <Tag text={taglabel} />
            </Link>
          ))}
          <button onClick={handleTag}>
            <TagIcon />
          </button>
        </div>
        <div className='flex mt-4 p-2 rounded-lg border border-gray-200 dark:border-gray-600 '>
          {design?.map(({ username, image, name }) => (
            <Link key={username} href={`/user/${username}`}>
              <PostUserAvatar image={image} name={name} />
            </Link>
          ))}

          {business?.map(({ username, image, name }) => (
            <Link key={username} href={`/user/${username}`}>
              <PostUserAvatar image={image} name={name} />
            </Link>
          ))}

          {ui?.map(({ username, image, name }) => (
            <Link key={username} href={`/user/${username}`}>
              <PostUserAvatar image={image} name={name} />
            </Link>
          ))}

          {gfx?.map(({ username, image, name }) => (
            <Link key={username} href={`/user/${username}`}>
              <PostUserAvatar image={image} name={name} />
            </Link>
          ))}

          {client?.map(({ username, image, name }) => (
            <Link key={username} href={`/user/${username}`}>
              <PostUserAvatar image={image} name={name} />
            </Link>
          ))}

          {server?.map(({ username, image, name }) => (
            <Link key={username} href={`/user/${username}`}>
              <PostUserAvatar image={image} name={name} />
            </Link>
          ))}

          {audio?.map(({ username, image, name }) => (
            <Link key={username} href={`/user/${username}`}>
              <PostUserAvatar image={image} name={name} />
            </Link>
          ))}

          {qa?.map(({ username, image, name }) => (
            <Link key={username} href={`/user/${username}`}>
              <PostUserAvatar image={image} name={name} />
            </Link>
          ))}
        </div>
        {memo && (
          <div className='flex text-sm font-bold m-3 dark:text-gray-400'>
            {memo}
          </div>
        )}
        <ul className='flex flex-col mt-4 gap-4'>
          {images?.map((image, index) => (
            <li key={index}>
              <Image
                className='rounded-lg blur-sm'
                src={image}
                alt={`photo by poohoot`}
                width={1920}
                height={1080}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
                priority={priority}
              />
            </li>
          ))}
        </ul>
      </div>
      {openModal && (
        <ModalPortal>
          <PostModal onClose={() => setOpenModal(false)}>
            <PostDetailTag post={post} />
          </PostModal>
        </ModalPortal>
      )}
    </article>
  );
}
