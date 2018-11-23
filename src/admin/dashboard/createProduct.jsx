import React, { useState } from 'react'
import { CreateProductView } from './createProductView'
import {createProduct as actionCreateProduct} from '../actions'
import {connect} from 'react-redux';

const createProduct = ({sessionID, createProduct}) => {
  const [productID, setProductID] = useState('')
  const [brand, setBrand] = useState('')
  const [cobrand, setCobrand] = useState('')
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [images, setImages] = useState([])
  const [description, setDescription] = useState('')
  const [retail, setRetail] = useState('')
  
  console.log(sessionID)
  
  const handleSubmit = e => {
    e.preventDefault()
    createProduct({
      productID,
      brand,
      cobrand,
      model,
      color,
      images,
      description,
      retail,
      sessionID
    })
  }
  return (
    <CreateProductView
      onSubmit={handleSubmit}
      productID={productID}
      setProductID={e => setProductID(e.target.value)}
      brand={brand}
      setBrand={e => setBrand(e.target.value)}
      cobrand={cobrand}
      setCobrand={e => setCobrand(e.target.value)}
      model={model}
      setModel={e => setModel(e.target.value)}
      color={color}
      setColor={e => setColor(e.target.value)}
      images={images}
      setImages={e => setImages(e.target.value)}
      description={description}
      setDescription={e => setDescription(e.target.value)}
      retail={retail}
      setRetail={e => setRetail(e.target.value)}
    />
  )
}
const mapStateToProps = state => ({
  sessionID: state._session.sessionID
})

export const CreateProduct = connect(mapStateToProps, {createProduct: actionCreateProduct})(createProduct)
