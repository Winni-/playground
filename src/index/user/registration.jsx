import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import { createUser } from './actions'
import { Input } from './input'

const nameFromEmail = email => {
  if (email.indexOf('@') === -1) return ''
  return email.split('@')[0]
}
export const validate = (email, password) => {
  if (email && password) return true
  return false
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
      <h3>Register</h3>
      <label htmlFor="rEmail">email:</label>
      <br />
      <Input
        id="rEmail"
        name="rEmail"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <br />
      <label htmlFor="rPassword">password:</label>
      <br />
      <Input
        id="rPassword"
        name="rPassword"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
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
