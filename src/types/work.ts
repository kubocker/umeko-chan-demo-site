import type { Content, Media } from 'newt-client-js'
import type { Author } from './author'
import type { Tag } from './tag'



export interface Work extends Content {
  title: string
  slug: string
  meta?: {
    title?: string
    description?: string
    ogImage?: Media
  }
  body: string
  coverImage: Media
  author: Author
  tags?: Tag[]
  publishedAt: Date;
}

export interface Archive {
  year: number
  count: number
}
