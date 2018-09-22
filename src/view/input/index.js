import React from 'react'
import { NormalInput } from './normal'
import { BigInput } from './big'

export const Input = ({ size, ...rest }) => {
  switch (size) {
    case 'big':
      return <BigInput {...rest} />

    default:
      return <NormalInput {...rest} />
  }
}
