import React from 'react'
import styled from 'styled-components'
import defaultImg from './default.jpg'
import { Link } from 'react-router-dom'

export const Card = ( { product: { brand, cobrand, images = defaultImg, model, retail }, link } ) => {
  return (
    <Link to={link}>
      <Figure>
        <Price>
          { retail }
        </Price>
        <ImgContainer>
          <Img src={ images }/>
        </ImgContainer>
        <Figcaption>{ `${ brand } ${ cobrand }` }<br/>{ model }</Figcaption>
      </Figure>
    </Link>
  )
}

const Figure = styled.figure`
  width: 200px;
  height: 280px;
  justify-self: center;
  align-self: center;
`
const Price = styled.div`
  text-align: right;
  height: 1.3em;
  line-height: 1.3em;
`
const ImgContainer = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
`
const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
`
const Figcaption = styled.figcaption`
  text-align: center;
  padding: 5px;
`
