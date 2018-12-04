import React, { useEffect } from 'react'
import { Heading, Table, TableBody, TableHead, TableRow, TextTableCell, TextTableHeaderCell } from 'evergreen-ui'
import { connect } from 'react-redux'
import { getProductList } from '../actions'
import { isEmpty } from 'ramda'

const productList = ( { products, getProductList } ) =>{
  
  useEffect(() =>{
    if ( isEmpty(products) ) {
      getProductList()
    }
    console.log(Object.values(products))
  })
  return (
    <div>
      <Heading size={ 800 } marginBottom={ 24 }>Sneakers</Heading>
      { isEmpty(products) ?
        <div>There is nothing in DB</div>
        :
        <Table>
          <TableHead>
            <TextTableHeaderCell>
              id
            </TextTableHeaderCell>
            <TextTableHeaderCell>Brand</TextTableHeaderCell>
            <TextTableHeaderCell>Cobrand</TextTableHeaderCell>
            <TextTableHeaderCell>model</TextTableHeaderCell>
            <TextTableHeaderCell>retail</TextTableHeaderCell>
            <TextTableHeaderCell>image</TextTableHeaderCell>
            <TextTableHeaderCell borderRight={ null }>
              Description
            </TextTableHeaderCell>
          </TableHead>
          <TableBody>
            
            { Object.values(products).map(sneaker => (
              <TableRow key={ sneaker._id } isSelectable>
                <TextTableCell>{ sneaker._id }</TextTableCell>
                <TextTableCell>{ sneaker.brand }</TextTableCell>
                <TextTableCell>{ sneaker.cobrand }</TextTableCell>
                <TextTableCell>{ sneaker.model }</TextTableCell>
                <TextTableCell isNumber>{ sneaker.retail }</TextTableCell>
                <TextTableCell><img height={ 48 } src={ sneaker.images } alt={ sneaker.model }/></TextTableCell>
                <TextTableCell borderRight={ null }>
                  { sneaker.description }
                </TextTableCell>
              </TableRow>
            )) }
          </TableBody>
        </Table>
        
      }
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export const ProductList = connect(mapStateToProps, { getProductList })(productList)