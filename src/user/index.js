import React from 'react'
import styled from 'styled-components'
import { SellProduct } from './sellProduct'
import { Button } from 'evergreen-ui'
import { logoutUser } from '../user/actions'
import connect from 'react-redux/es/connect/connect'

const user = ({logoutUser}) => {
  const handleClick = () => {
    logoutUser()
  }
  return (
    <Grid>
      <Header>
        <h1>User</h1>
        <Button onClick={ handleClick }>Logout</Button>
      </Header>
      <SellProduct/>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
   grid-template-areas:
    "header header"
    "main main"
    "footer footer";
`
const Header = styled.header`
  grid-area: header;
  display: grid;
  grid-template-columns: 90% 10%;
`

export const User = connect(null, { logoutUser })(user)
