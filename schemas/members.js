export default{
    name: 'members',
    title: 'Members',
    type:'document',
    fields: [
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'coreMember',
            title:'CoreMember',
            type:'boolean',
        },
        {
            name:'post',
            title:'Post',
            type:'string'
        },
        {
            name:'rank',
            title:'Rank',
            type:'number'
        },
        {
            name:'image',
            title:'ImgUrl',
            type:'image',
            options:{
                hotspot: true,
            }
        },
        {
            name:'linkedin',
            title:'LinkedIn',
            type:'url'
        },
        {
            name:'twitter',
            title:'Twitter',
            type:'url'
        },
        {
            name:'instagram',
            title:'Instagram',
            type:'url'
        },
        {
            name:'github',
            title:'GitHub',
            type:'url'
        },
    ]
}