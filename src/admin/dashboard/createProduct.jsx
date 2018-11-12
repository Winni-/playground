import React, { useState } from 'react'
import { Button, TextInput, Label, Heading } from 'evergreen-ui'

export const CreateProduct = () => {
  const [productID, setProductID] = useState('')
  const [brand, setBrand] = useState('')
  const [cobrand, setCobrand] = useState('')
  const [model, setModel] = useState('')
  const [color, setColor] = useState('')
  const [images, setImages] = useState([])
  const [description, setDescription] = useState('')
  const [retail, setRetail] = useState('')
  return (
    <form action="">
      <Heading size={600} marginBottom={24}>
        Create product
      </Heading>

      <Label htmlFor="productID">productID:</Label>
      <TextInput
        id="productID"
        name="productID"
        value={productID}
        onChange={e => setProductID(e.target.value)}
        marginBottom={8}
      />

      <Label htmlFor="brand">brand:</Label>
      <TextInput
        id="brand"
        name="brand"
        value={brand}
        onChange={e => setBrand(e.target.value)}
        marginBottom={8}
      />

      <Label htmlFor="">cobrand:</Label>
      <TextInput
        id="cobrand"
        name="cobrand"
        value={cobrand}
        onChange={e => setCobrand(e.target.value)}
        marginBottom={8}
      />

      <Label htmlFor="">model:</Label>
      <TextInput
        id="model"
        name="model"
        value={model}
        onChange={e => setModel(e.target.value)}
        marginBottom={8}
      />

      <Label htmlFor="">color:</Label>
      <TextInput
        id="color"
        name="color"
        value={color}
        onChange={e => setColor(e.target.value)}
        marginBottom={8}
      />

      <Label htmlFor="">images:</Label>

      <Label htmlFor="">description:</Label>
      <TextInput
        id="description"
        name="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        marginBottom={8}
        appearance="textarea"
      />

      <Label htmlFor="">retail:</Label>
      <TextInput
        id="retail"
        name="retail"
        type="number"
        value={retail}
        onChange={e => setRetail(e.target.value)}
        marginBottom={8}
      />
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}
