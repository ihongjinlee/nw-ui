export default {
  title: 'user',
  name: 'user',
  type: 'document',
  fields: [
    {
      title: 'loginGoogle',
      name: 'loginGoogle',
      type: 'boolean',
    },
    {
      title: 'email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'username',
      name: 'username',
      type: 'string',
    },
    {
      title: 'name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'team',
      name: 'team',
      type: 'string',
      options: {
        list: [
          { title: 'ready', value: 'ready' },
          { title: 'design', value: 'design' },
          { title: 'ui', value: 'ui' },
          { title: 'gfx', value: 'gfx' },
          { title: 'client', value: 'client' },
          { title: 'server', value: 'server' },
          { title: 'audio', value: 'audio' },
          { title: 'effect', value: 'effect' },
          { title: 'qa', value: 'qa' },
          { title: 'pm', value: 'pm' },
          { title: 'business', value: 'business' },
          { title: '캐릭터모델링', value: '캐릭터모델링' },
          { title: '배경모델링', value: '배경모델링' },
          { title: '애니메이션', value: '애니메이션' },
          { title: '시네마틱', value: '시네마틱' },
          { title: '원화', value: '원화' },
          { title: '인프라', value: '인프라' },
          { title: '운영툴개발', value: '운영툴개발' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'image',
      name: 'image',
      type: 'url',
    },
    {
      title: 'bookmarks',
      name: 'bookmarks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'post' }],
          options: {
            disableNew: true,
          },
        },
      ],
      validattion: (Rule) => Rule.unique(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'username',
    },
  },
};
