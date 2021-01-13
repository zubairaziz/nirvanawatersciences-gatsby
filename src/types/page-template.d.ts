import { PageProps } from 'gatsby'
import { WPPageProps } from './wp-page'
import { WPPostProps } from './wp-post'
import { WPMemberProps } from './wp-member'

export interface PageTemplateProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        business: string
        addressStreet: string
        addressCity: string
        addressState: string
        addressZip: string
        phone1: string
        phone2: string
      }
    }
    allWpPage: {
      edges: Array<WPPageProps>
    }
    allWpPost: {
      edges: Array<WPPostProps>
    }
    allWpTeamMember: {
      edges: Array<WPMemberProps>
    }
  }
}
