import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { View } from './view'
import { getProductList } from './actions'
import { isEmpty } from 'ramda'

const index = ( { products, getProductList } ) => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false)
  
  const handleUserToggle = e => {
    setUserDropdownOpen(!userDropdownOpen)
  }
  useEffect(() => {
    if ( isEmpty(products) ) getProductList()
  })
  
  return (
    <View
      userDropdownOpen={ userDropdownOpen }
      handleUserToggle={ handleUserToggle }
      products={ products }
    />
  )
}

const mapStateToProps = state => ({
  products: state.products,
})
const mapDispatchToProps = {
  getProductList,
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
