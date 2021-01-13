export interface GatsbyImageProps {
  localFile: {
    publicURL: string | undefined
    childImageSharp: {
      fluid: any | undefined
      fixed: any | undefined
    }
  }
}
