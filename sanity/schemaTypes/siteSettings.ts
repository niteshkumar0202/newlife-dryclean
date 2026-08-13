import {defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({name:'businessName', title:'Business Name', type:'string', initialValue:'NewLife Dryclean'}),
    defineField({name:'phone', title:'Phone', type:'string', initialValue:'9507111333'}),
    defineField({name:'whatsapp', title:'WhatsApp Number', type:'string', initialValue:'919507111333'}),
    defineField({name:'servicesHeroTitle', title:'Services Hero Title', type:'string', initialValue:'Fresh, Clean Laundry—Delivered to Your Door'}),
    defineField({name:'servicesHeroText', title:'Services Hero Text', type:'text', rows:4}),
    defineField({name:'freePickup', title:'Free Pickup & Delivery', type:'boolean', initialValue:true}),
    defineField({name:'firstOrderDiscount', title:'First Order Discount (%)', type:'number', initialValue:15}),
  ],
})
