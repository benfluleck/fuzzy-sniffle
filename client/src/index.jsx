
import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import client from '<core>/graphql'
import { BrowserRouter as Router } from 'react-router-dom'

import ThemeWrapper from '<styles>/ThemeWrapper'
import GlobalStyle from '<styles>/global'
import BaseRoutes from '<pages>/index.jsx'

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
