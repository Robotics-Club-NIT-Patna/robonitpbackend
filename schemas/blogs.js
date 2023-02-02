export default {
  name: 'blogs',
  title: 'Blogs',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'ImgUrl',
      type: 'image',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'writer',
      title: 'Writer',
      type: 'string',
    },
    {
      name: 'roll',
      title: 'Roll',
      type: 'number',
    },
    {
      name: 'branch',
      title: 'Branch',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'theme',
      title: 'Theme',
      type: 'string',
    },
  ],
}
