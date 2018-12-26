import React from 'react'
import { Redirect, Route, withRouter  } from 'react-router-dom'
import {connect} from 'react-redux'

function privateRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}
const mapStateToProps = state => ({
  isAuthenticated: state.session.sessionID.length > 0
})
export const PrivateRoute = withRouter(connect(mapStateToProps)(privateRoute))