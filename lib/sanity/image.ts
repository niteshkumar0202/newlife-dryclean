import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {sanityClient} from './client'

export function sanityImageUrl(source: SanityImageSource | undefined){
  if(!source || !sanityClient) return null
  return imageUrlBuilder(sanityClient).image(source)
}
