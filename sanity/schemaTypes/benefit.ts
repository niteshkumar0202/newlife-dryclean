import {defineField, defineType} from 'sanity'
export const benefit = defineType({
 name:'benefit', title:'Why Choose Us', type:'document', fields:[
  defineField({name:'title', title:'Title', type:'string', validation:r=>r.required()}),
  defineField({name:'description', title:'Description', type:'text', rows:4}),
  defineField({name:'order', title:'Display Order', type:'number'}),
  defineField({name:'active', title:'Active', type:'boolean', initialValue:true}),
 ]
})
