
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import client from '<core>/graphql'
import gql from 'graphql-tag'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeWrapper from '<styles>/ThemeWrapper'
import GlobalStyle from '<styles>/global'
import BaseRoutes from '<pages>/index.jsx'

client
  .query({
    query: gql`
    query {
    characters(page: 2) {
      info {
        count
      }
      results {
        name
      }
    }
    character(id: 1) {
      id
    }
  }
  `
  })
  .then((res) => { console.log(res, '>>>>>>>') })

const App = () => (
  <ApolloProvider client={client}>
    <ThemeWrapper>
      <Fragment>
        <GlobalStyle />
        <Router>
          <BaseRoutes />
        </Router>
      </Fragment>
    </ThemeWrapper>
  </ApolloProvider>
)

export default App

render(<App />, document.getElementById('app'))
