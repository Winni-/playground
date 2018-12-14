import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from './view'
import { getProductList } from './actions'

class index extends Component {
  state = {
    userDropdownOpen: false,
  }
  handleUserToggle = e =>{
    this.setState({ userDropdownOpen: !this.state.userDropdownOpen })
  }
  
  componentDidMount(){
    this.props.getProductList()
  }
  
  render(){
    return (
      <View
        userDropdownOpen={this.state.userDropdownOpen}
        handleUserToggle={this.handleUserToggle}
        products={this.props.products}
      />
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
})
const mapDispatchToProps = {
  getProductList
}

export default connect(mapStateToProps, mapDispatchToProps)(index)
