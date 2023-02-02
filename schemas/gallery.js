export default {
  name: 'gallery',
  title: 'Gallery',
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
      name: 'date',
      title: 'Date',
      type: 'date',
    },
  ],
}
