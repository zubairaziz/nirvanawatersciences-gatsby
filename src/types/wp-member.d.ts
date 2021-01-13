export interface WPMemberProps {
  node: {
    id: string
    title: string | undefined
    slug: string | undefined
    content: string | undefined
    acfTeamMember: {
      memberRole: string
    }
  }
}
