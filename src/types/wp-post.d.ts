import { GatsbyImageProps } from './gatsby-image'

export interface WPPostProps {
  node: {
    id: string | number | undefined
    title: string | undefined
    slug: string | undefined
    content: string | undefined
    seo: {
      canonical: string | undefined
      metaDesc: string | undefined
      seoTitle: string | undefined
      opengraphImage: GatsbyImageProps | undefined
    }
    acfFeaturedImage: {
      featuredImage: GatsbyImageProps | undefined
    }
    acfPageHeader: {
      smallHeader: string | undefined
      largeHeader: string | undefined
    }
  }
}
