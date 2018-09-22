import React from 'react'
import { SmallButton } from './small'
import { NormalButton } from './normal'
import { BigButton } from './big'

export const Button = ({ size, ...rest }) => {
  switch (size) {
    case 'small':
      return <SmallButton {...rest} />
    case 'big':
      return <BigButton {...rest} />

    default:
      return <NormalButton {...rest} />
  }
}
