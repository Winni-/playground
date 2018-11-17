import React from 'react'
import styled from 'styled-components'
import { CreateProduct } from './createProduct'
import {ProductList} from './productList'

const Grid = styled.div`
  display: grid;
  grid-auto-columns: 300px;
  grid-auto-rows: 500px;
`

export const Dashboard = () => {
  return (
    <Grid>
      <CreateProduct />
      <ProductList/>
    </Grid>
  )
}
