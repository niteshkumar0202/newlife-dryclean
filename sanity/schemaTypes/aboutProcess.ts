import {defineField, defineType} from 'sanity'
export const aboutProcess = defineType({
 name:'aboutProcess', title:'About - Garment Care Process', type:'document', fields:[
  defineField({name:'title', title:'Step Title', type:'string', validation:r=>r.required()}),
  defineField({name:'description', title:'Description', type:'text', rows:3}),
  defineField({name:'image', title:'Step Image', type:'image', options:{hotspot:true}}),
  defineField({name:'order', title:'Step Number', type:'number', validation:r=>r.required()}),
  defineField({name:'active', title:'Active', type:'boolean', initialValue:true}),
 ]
})
