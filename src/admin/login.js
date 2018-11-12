import React, { useState } from 'react'
import { connect } from 'react-redux'
import { authenticateUser } from './actions'
import { Button, TextInput, Label, Heading } from 'evergreen-ui'
import { validate } from '../util/validate'

const login = ({ authenticateUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (validate(email, password)) authenticateUser(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Heading size={800} marginBottom={24}>
        Login
      </Heading>
      <Label htmlFor="Email" display="block">
        Email:
      </Label>
      <TextInput
        id="Email"
        name="Email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        marginBottom={24}
      />
      <Label htmlFor="Password" display="block">
        Password:
      </Label>
      <TextInput
        id="Password"
        name="Password"
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
export const Login = connect(
  null,
  { authenticateUser }
)(login)
