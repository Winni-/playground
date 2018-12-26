import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { SearchInput } from 'evergreen-ui'
import styled from 'styled-components'
import { getProductList } from '../../index/actions'

const selectProduct = ( { products, value, getProductList, onChange, required } ) => {
  const [searchValue, setSearchValue] = useState('')
  useEffect(() => {
    if ( products.length === 0 ) getProductList()
  })
  console.log(value)
  const handleClick = (id) => (e) => {
    e.preventDefault()
    onChange(id)
  }
  return (
    <Container>
      <HiddenInput value={value}  required={required}/>
      <SearchInput placeholder="Filter sneakers..."
                   onChange={ e => setSearchValue(e.target.value) }
                   value={ searchValue }/>
      <Grid>
        { products.filter(( { brand, cobrand, model } ) => {
          return `${ brand }${ cobrand }${ model }`.toLowerCase().includes(searchValue.toLowerCase())
        }).map(( { brand, cobrand, model, images, _id } ) => (
          <button onClick={handleClick(_id)} key={ _id }>
            <Product selected={value === _id}>
              <img src={ images } alt={ model }/>
              <figcaption>
                { brand } { cobrand } { model }
              </figcaption>
            </Product>
          </button>
        )) }
      </Grid>
    </Container>
  )
}
const Product = styled.figure`
  border: ${props=> props.selected ? "1px solid blue": "1px solid transparent"};
  img{
    width: 100%;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 80px);
`
const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  bottom: 0;
  z-index: -1;
`
const Container = styled.div`
  position: relative;
`
const mapStateToProps = state => ({
  products: state.products,
})

export const SelectProduct = connect(mapStateToProps, { getProductList })(selectProduct)