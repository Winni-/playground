import React, { Component } from 'react'
import firebase from '../firebase'

export class Registration extends Component {
  state = {
    email: '',
    password: '',
  }
  handleChange = prop => e => {
    this.setState({ [prop]: e.currentTarget.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        const errorCode = error.code
        const errorMessage = error.message

        if (errorCode === 'auth/weak-password') {
          alert('The password is too weak.')
        } else {
          alert(errorMessage)
        }
        console.warn(error)
      })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Register</h3>
        <label htmlFor="rEmail">email:</label>
        <br />
        <input
          id="rEmail"
          name="rEmail"
          type="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
        />
        <br />
        <label htmlFor="rPassword">password:</label>
        <br />
        <input
          id="rPassword"
          name="rPassword"
          type="password"
          value={this.state.password}
          onChange={this.handleChange('password')}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    )
  }
}
