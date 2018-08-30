import React, { Component } from 'react'
import firebase from '../firebase'

export class Login extends Component {
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
        <h3>Login</h3>
        <label htmlFor="Email">email:</label>
        <br />
        <input
          id="Email"
          name="Email"
          type="email"
          value={this.state.email}
          onChange={this.handleChange('email')}
        />
        <br />
        <label htmlFor="Password">password:</label>
        <br />
        <input
          id="Password"
          name="Password"
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
