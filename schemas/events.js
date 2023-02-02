export default {
  name: 'events',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'detail',
      title: 'Detail',
      type: 'string',
    },
    {
      name: 'image',
      title: 'ImgUrl',
      type: 'image',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'rewards',
      title: 'Rewards',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
