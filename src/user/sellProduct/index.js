import React, { useState } from 'react'
import { Button, Heading, Label, TextInput } from 'evergreen-ui'
import { connect } from 'react-redux'
import { addSlot } from './actions'
import { SelectProduct } from './selectProduct'

const sellProduct = ( { addSlot, sessionID } ) => {
  const [productID, setProductID] = useState('')
  const [size, setSize] = useState('')
  const [amount, setAmount] = useState(1)
  const handleSubmit = e => {
    e.preventDefault()
    addSlot({ productID, size, amount, sessionID })
  }
  
  return (
    <section>
      <form onSubmit={ handleSubmit }>
        <Heading size={ 500 } marginBottom={ 24 }>
          Sell
        </Heading>
        <Label htmlFor="ProductID" display="block">
          Product:
        </Label>
        <SelectProduct
          id="ProductID"
          name="ProductID"
          value={ productID }
          onChange={ setProductID }
          required
        />
        <Label htmlFor="Size" display="block">
          Size:
        </Label>
        <TextInput
          id="Size"
          name="Size"
          type="text"
          value={ size }
          onChange={ e => setSize(e.target.value) }
          marginBottom={ 24 }
          required
          validationMessage="This field is required"
        />
        <Label htmlFor="Amount" display="block">
          Amount:
        </Label>
        <TextInput
          id="Amount"
          name="Amount"
          type="number"
          value={ amount }
          onChange={ e => setAmount(e.target.value) }
          marginBottom={ 24 }
        />
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </section>
  )
}
const mapStateToProps = state => ({
  sessionID: state.session.sessionID,
})

export const SellProduct = connect(mapStateToProps, { addSlot })(sellProduct)

