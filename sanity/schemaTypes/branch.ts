import {defineField, defineType} from 'sanity'
export const branch = defineType({
 name:'branch', title:'Branches', type:'document', fields:[
  defineField({name:'name', title:'Branch Name', type:'string', validation:r=>r.required()}),
  defineField({name:'slug', title:'Slug', type:'slug', options:{source:'name'}, validation:r=>r.required()}),
  defineField({name:'address', title:'Address', type:'text', rows:4}),
  defineField({name:'mapsUrl', title:'Google Maps URL', type:'url'}),
  defineField({name:'phone', title:'Phone', type:'string'}),
  defineField({name:'hours', title:'Business Hours', type:'string'}),
  defineField({name:'active', title:'Active', type:'boolean', initialValue:true}),
 ]
})
