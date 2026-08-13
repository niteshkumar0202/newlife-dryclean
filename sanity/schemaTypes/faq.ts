import {defineField, defineType} from 'sanity'
export const faq = defineType({
 name:'faq', title:'FAQs', type:'document', fields:[
  defineField({name:'question', title:'Question', type:'string', validation:r=>r.required()}),
  defineField({name:'answer', title:'Answer', type:'text', rows:5, validation:r=>r.required()}),
  defineField({name:'page', title:'Page', type:'string', options:{list:['home','services','about']}, initialValue:'home'}),
  defineField({name:'order', title:'Display Order', type:'number'}),
  defineField({name:'active', title:'Active', type:'boolean', initialValue:true}),
 ]
})
