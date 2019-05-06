
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Title from '<atoms>/Title'

const Page = ({
  pageTitle,
  children
}) => (
  <Page.Container>
    <Page.NavBar />
    <Page.TitleContainer>
      <Title fontSize="lg">
        {pageTitle}
      </Title>
    </Page.TitleContainer>
    <Page.Content>
      {children}
    </Page.Content>
    <Page.Footer />
  </Page.Container>
)

Page.Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${props => props.theme.spacing.basePlusXs};
  grid-template-rows: auto auto 1fr auto;
  grid-template-areas:
    "nav"
    "title"
    "content"
    "footer";
  min-height: 100vh;`

Page.NavBar = styled.div`
  ${({ theme: { spacing, textColors } }) => `
  background-color: ${textColors.navbar};
  grid-area: nav;
  padding: ${spacing.smPlusBasePlusxs} ${spacing.basePlusXs};
  display: flex;
`}`

Page.Content = styled.div`
${({ theme: { spacing } }) => `
  grid-area: content;
  padding: ${spacing.sm} ${spacing.mdPlusBase};
`}`

Page.Footer = styled(Page.NavBar)`
  grid-area: footer;
`

Page.TitleContainer = styled.div`
  grid-area: title;
  border-bottom: 0.1rem solid  ${props => props.theme.textColors.navbar};
  padding-left: ${props => props.theme.spacing.mdPlusBase};
`

Page.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Page
