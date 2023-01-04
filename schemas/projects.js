export default{
    name: 'projects',
    title: 'Projects',
    type:'document',
    fields: [
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'detail',
            title:'Detail',
            type:'string'
        },
        {
            name:'image',
            title:'ImgUrl',
            type:'image',
        },
        {
            name:'date',
            title:'Date',
            type:'date'
        },
        {
            name:'tags',
            title:'Tags',
            type:'array',
            of: [{type: 'string'}]
        },
    ]
}