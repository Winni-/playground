import React from 'react'
import { connect } from 'react-redux'
import Index from './index/index'
import Product from './product'
import Admin from './admin'

const switcher = ({ page }) => {
  console.log(page)
  return pages[page]
}
const pages = {
  HOME: <Index />,
  PRODUCT: <Product />,
  ADMIN: <Admin />,
}
const mapStateToProps = state => ({
  page: state.rootReducer.location,
})

export const Switcher = connect(mapStateToProps)(switcher)
