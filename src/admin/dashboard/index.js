import React from 'react'
import styled from 'styled-components'
import { CreateProduct } from './createProduct'
import { ProductList } from './productList'
import { Button } from 'evergreen-ui'
import { connect } from 'react-redux'
import { logoutUser } from '../../user/actions'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px calc(100vW - 300px);
  grid-template-rows: 30px 500px;
  grid-template-areas: "header header" "body body";
`
const Header = styled.header`
  text-align: right;
  grid-area: header;
`

const dashboard = ( { logoutUser } ) =>{
  const handleClick = () => {
    logoutUser()
  }
  return (
    <Grid>
      <Header> <Button onClick={ handleClick }>Logout</Button> </Header>
      
      <CreateProduct/>
      <ProductList/>
    </Grid>
  )
}

const mapDispatchToProps = {
  logoutUser
}

export const Dashboard = connect(null, mapDispatchToProps)(dashboard)
