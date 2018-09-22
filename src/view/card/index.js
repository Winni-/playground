import React from 'react'
import styled from 'styled-components'
import defaultImg from './default.jpg'

export const Card = ({ price, img = defaultImg, caption = 'none' }) => {
  return (
    <Figure>
      <Price>
        {price ? '$' : null}
        {price}
      </Price>
      <ImgContainer>
        <Img src={img} />
      </ImgContainer>
      <Figcaption>{caption}</Figcaption>
    </Figure>
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
