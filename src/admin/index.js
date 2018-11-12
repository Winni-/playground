import React from 'react'
import { Login } from './login'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { Dashboard } from './dashboard'

const LoginWrapper = styled.div`
  width: 280px;
  margin: 100px auto 0;
`

const Admin = ({ loggedIn }) => {
  return !loggedIn ? (
    <LoginWrapper>
      <Login />
    </LoginWrapper>
  ) : (
    <Dashboard />
  )
}
const mapStateToProps = state => {
  return { loggedIn: state.rootReducer._session.sessionID.length > 0 }
}
export default connect(mapStateToProps)(Admin)
