import {sanityClient} from './client'

export type CmsService = {title:string; description?:string; imageUrl?:string; slug?:string; order?:number}
export type CmsBenefit = {title:string; description?:string; order?:number}
export type CmsProcess = {title:string; description?:string; imageUrl?:string; order?:number}
export type CmsSettings = {servicesHeroTitle?:string; servicesHeroText?:string; firstOrderDiscount?:number}

async function safeFetch<T>(query:string):Promise<T|null>{
  if(!sanityClient) return null
  try { return await sanityClient.fetch<T>(query, {}, {next:{revalidate:60}}) } catch { return null }
}

export const getCmsSettings = () => safeFetch<CmsSettings>(`*[_type == "siteSettings"][0]{servicesHeroTitle,servicesHeroText,firstOrderDiscount}`)
export const getCmsServices = () => safeFetch<CmsService[]>(`*[_type == "service" && active != false] | order(order asc){title,description,"imageUrl":image.asset->url,"slug":slug.current,order}`)
export const getCmsBenefits = () => safeFetch<CmsBenefit[]>(`*[_type == "benefit" && active != false] | order(order asc){title,description,order}`)
export const getCmsAboutProcess = () => safeFetch<CmsProcess[]>(`*[_type == "aboutProcess" && active != false] | order(order asc){title,description,"imageUrl":image.asset->url,order}`)
