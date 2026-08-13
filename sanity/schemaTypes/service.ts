import {defineField, defineType} from 'sanity'

export const service = defineType({
  name:'service', title:'Services', type:'document',
  fields:[
    defineField({name:'title', title:'Title', type:'string', validation:r=>r.required()}),
    defineField({name:'slug', title:'Slug / Key', type:'slug', options:{source:'title'}, validation:r=>r.required()}),
    defineField({name:'description', title:'Description', type:'text', rows:5}),
    defineField({name:'image', title:'Service Image', type:'image', options:{hotspot:true}}),
    defineField({name:'order', title:'Display Order', type:'number'}),
    defineField({name:'active', title:'Active', type:'boolean', initialValue:true}),
  ],
  orderings:[{title:'Display order', name:'displayOrder', by:[{field:'order', direction:'asc'}]}],
})
