import React from 'react'
import styled from 'styled-components'
import { Card } from '../../view'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5em;
`


export const Products = ( { products } ) =>{
  return (
    <Grid>
      { products ?
        products.map(product => (<Card key={product._id} product={product} />)) :
        <div>Loading...</div>
      }
    </Grid>
  )
}

