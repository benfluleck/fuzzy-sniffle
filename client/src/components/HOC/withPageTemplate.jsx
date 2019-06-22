import React from 'react'
import PageTemplate from '<templates>/Page'

function withPageTemplate (Component, pageTitle) {
  function CurrentPage (props) {
    return (
      <PageTemplate pageTitle={pageTitle}>
        <Component
          {...props}/>
      </PageTemplate>)
  }

  return CurrentPage
}

export default withPageTemplate
