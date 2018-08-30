import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import { Index } from './index'

export const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <Route exact path="/" component={Index} />
  </ConnectedRouter>
)
