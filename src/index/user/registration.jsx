import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createUser } from './actions'
import { Button, TextInput, Label, Heading } from 'evergreen-ui'
import { validate } from '../../util/validate'

const nameFromEmail = email => {
  if (email.indexOf('@') === -1) return ''
  return email.split('@')[0]
}

const registration = ({ createUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submit = e => {
    e.preventDefault()
    if (validate(email, password)) {
      const passwordConfirm = password
      const name = nameFromEmail(email)
      createUser(name, password, passwordConfirm, email)
    }
  }
  return (
    <form onSubmit={submit}>
      <Heading size={800} marginBottom={24}>
        Register
      </Heading>
      <Label htmlFor="rEmail" display="block">
        Email:
      </Label>
      <TextInput
        id="rEmail"
        name="rEmail"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        marginBottom={24}
      />

      <Label htmlFor="rPassword" display="block">
        Password:
      </Label>

      <TextInput
        id="rPassword"
        name="rPassword"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        marginBottom={24}
      />

      <div>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  )
}
const mapDispatchToProps = {
  createUser,
}

export const Registration = connect(
  null,
  mapDispatchToProps
)(registration)
