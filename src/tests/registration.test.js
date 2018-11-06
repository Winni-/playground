import React from 'react'
import ReactDOM from 'react-dom'
import {
  registration as Registration,
  validate,
} from '../index/user/registration'
import { watchRegistration } from '../index/user/sagas'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Registration />, div)
  ReactDOM.unmountComponentAtNode(div)
})
it('returns error on registration form validation', () => {
  expect(validate('', '')).toBeFalsy()
  expect(validate('', '1dfsgdfsg')).toBeFalsy()
  expect(validate('asdf', '')).toBeFalsy()
  expect(validate('asdf@', '1dfsgdfsg')).toBeFalsy()
  expect(validate('@asdf', '1dfsgdfsg')).toBeFalsy()
  expect(validate('sdaf@asdf', '1823475678943')).toBeFalsy()
})
it('returns true on registration form validation', () => {
  expect(validate('asdf@personal.com', '1dfsgdfsg')).toBeTruthy()
  expect(validate('good@gmail.com', '1dfsgdfsg')).toBeTruthy()
  expect(validate('asd@192.168.1.2', '1dfsgdfsg')).toBeTruthy()
  expect(validate('asd@192.168.1.2', '14325499g')).toBeTruthy()
  expect(validate('asd@192.168.1.2', '14325499G')).toBeTruthy()
  expect(validate('asd@192.168.1.2', '1%32&9_G')).toBeTruthy()
})

it('sends registration request to server', () => {
  return false
})

it('returns success on registration valid request', () => {
  return false
})
