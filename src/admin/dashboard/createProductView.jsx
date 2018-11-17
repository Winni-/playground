import React from 'react'
import { Button, TextInput, Label, Heading } from 'evergreen-ui'
import styled from 'styled-components'

export const CreateProductView = ({
  onSubmit,
  productID,
  setProductID,
  brand,
  setBrand,
  cobrand,
  setCobrand,
  model,
  setModel,
  color,
  setColor,
  description,
  setDescription,
  retail,
  setRetail,
}) => {
  return (
    <Form onSubmit={onSubmit}>
      <Heading size={600} marginBottom={24}>
        Create product
      </Heading>

      <Label htmlFor="productID">productID:</Label>
      <TextInput
        id="productID"
        name="productID"
        value={productID}
        onChange={setProductID}
        marginBottom={8}
      />

      <Label htmlFor="brand">brand:</Label>
      <TextInput
        id="brand"
        name="brand"
        value={brand}
        onChange={setBrand}
        marginBottom={8}
      />

      <Label htmlFor="cobrand">cobrand:</Label>
      <TextInput
        id="cobrand"
        name="cobrand"
        value={cobrand}
        onChange={setCobrand}
        marginBottom={8}
      />

      <Label htmlFor="model">model:</Label>
      <TextInput
        id="model"
        name="model"
        value={model}
        onChange={setModel}
        marginBottom={8}
      />

      <Label htmlFor="color">color:</Label>
      <TextInput
        id="color"
        name="color"
        value={color}
        onChange={setColor}
        marginBottom={8}
      />

      <Label htmlFor="">images:</Label>

      <Label htmlFor="description">description:</Label>
      <TextInput
        id="description"
        name="description"
        value={description}
        onChange={setDescription}
        marginBottom={8}
        appearance="textarea"
      />

      <Label htmlFor="retail">retail:</Label>
      <TextInput
        id="retail"
        name="retail"
        type="number"
        value={retail}
        onChange={setRetail}
        marginBottom={8}
      />
      <div>
        <Button type="submit">Submit</Button>
      </div>
    </Form>
  )
}

const Form = styled.form`
  padding: 10px;
`
