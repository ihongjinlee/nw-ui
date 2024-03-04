export default {
  title: 'post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'upkfla',
      name: 'upkfla',
      type: 'string',
    },
    {
      title: 'uiurl',
      name: 'uiurl',
      type: 'url',
    },
    {
      title: 'apiurl',
      name: 'apiurl',
      type: 'url',
    },
    {
      title: 'memo',
      name: 'memo',
      type: 'string',
    },
    {
      title: 'description',
      name: 'description',
      type: 'string',
    },
    {
      title: 'releasedate',
      name: 'releasedate',
      type: 'date',
    },
    {
      title: 'taglabels',
      name: 'taglabels',
      type: 'array',
      of: [
        {
          title: 'taglabel',
          name: 'taglabel',
          type: 'document',
          fields: [
            {
              title: 'author',
              name: 'author',
              type: 'reference',
              to: [{ type: 'user' }],
            },
            {
              title: 'taglabel',
              name: 'taglabel',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      title: 'screenshots',
      name: 'screenshots',
      type: 'array',
      of: [
        {
          title: 'Photo',
          name: 'photo',
          type: 'image',
        },
      ],
    },
    {
      title: 'design',
      name: 'design',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
          options: {
            disableNew: true,
          },
        },
      ],
      validattion: (Rule) => Rule.unique(),
    },
    {
      title: 'business',
      name: 'business',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
          options: {
            disableNew: true,
          },
        },
      ],
      validattion: (Rule) => Rule.unique(),
    },
    {
      title: 'ui',
      name: 'ui',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
          options: {
            disableNew: true,
          },
        },
      ],
      validattion: (Rule) => Rule.unique(),
    },
    {
      title: 'gfx',
      name: 'gfx',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
          options: {
            disableNew: true,
          },
        },
      ],
      validattion: (Rule) => Rule.unique(),
    },
    {
      title: 'client',
      name: 'client',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
          options: {
            disableNew: true,
          },
        },
      ],
      validattion: (Rule) => Rule.unique(),
    },
    {
      title: 'server',
      name: 'server',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
          options: {
            disableNew: true,
          },
        },
      ],
      validattion: (Rule) => Rule.unique(),
    },
    {
      title: 'audio',
      name: 'audio',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
          options: {
            disableNew: true,
          },
        },
      ],
      validattion: (Rule) => Rule.unique(),
    },
    {
      title: 'qa',
      name: 'qa',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'user' }],
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
      title: 'upkfla',
      subtitle: 'gfx.0.name',
    },
  },
};
