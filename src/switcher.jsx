import React from 'react'
import { connect } from 'react-redux'
import Index from './index/index'
import Product from './product'
import Admin from './admin'

const switcher = ({ page }) => {
  return pages[page]
}
const pages = {
  HOME: <Index />,
  PRODUCT: <Product />,
  ADMIN: <Admin />,
}
const mapStateToProps = state => ({
  page: state?.location?.type,
})

export const Switcher = connect(mapStateToProps)(switcher)
