import React from 'react'
import { Route, Switch } from 'react-router-dom'

import routes from '<core>/routing'

const BaseRoutes = () => (
  <Switch>
    {
      routes.map(({ exact, path, component }, index) => (
        <Route key={ index } exact={exact} path={path} component={component} />
      ))
    }
  </Switch>
)

export default BaseRoutes
