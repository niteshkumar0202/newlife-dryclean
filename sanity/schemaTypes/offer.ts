import {defineField, defineType} from 'sanity'
export const offer = defineType({
 name:'offer', title:'Offers & Promotions', type:'document', fields:[
  defineField({name:'title', title:'Offer Title', type:'string', validation:r=>r.required()}),
  defineField({name:'description', title:'Description', type:'text', rows:3}),
  defineField({name:'discountPercent', title:'Discount %', type:'number'}),
  defineField({name:'active', title:'Active', type:'boolean', initialValue:true}),
  defineField({name:'startDate', title:'Start Date', type:'date'}),
  defineField({name:'endDate', title:'End Date', type:'date'}),
 ]
})
