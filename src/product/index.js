import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getProductDetails } from './actions'

const findProductByID = ( products, id ) =>
  products.find(product => product._id === id)

const Product = ( { match: { params: { id } }, getProductDetails, products = [] } ) => {
  
  //set initial state to product from list, that we find by id
  const [currentProduct, setCurrentProduct] = useState(findProductByID(products, id))
  
  useEffect(() => {
    if ( !currentProduct && findProductByID(products, id) ) setCurrentProduct(findProductByID(products, id))
    if ( !currentProduct ) getProductDetails(id)
  })
  if ( !currentProduct ) return <div>Loading...</div>
  return (
    <div>
      <h2>{ currentProduct.brand } { currentProduct.cobrand }</h2>
      <h1>{ currentProduct.model }</h1>
      <figure>
        <img src={ currentProduct.images } alt={ currentProduct.model }/>
        <figcaption>{ currentProduct.retail }</figcaption>
      </figure>
      <p>{ currentProduct.description }</p>
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products,
})

export default connect(mapStateToProps, { getProductDetails })(Product)