import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '../App.js'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('gets items from server', () => {
  return false
})

it('sends login request to server', () => {
  return false
})
it('returns error on login form validation', () => {
  return false
})
it('returns success on login valid request', () => {
  return false
})

it('creates product', () => {
  return false
})
it('returns errors on product creation', () => {
  return false
})
it('returns success on product creation', () => {
  return false
})

it('creates slot', () => {
  return false
})
it('returns errors on slot creation', () => {
  return false
})
it('returns success on slot creation', () => {
  return false
})

it('creates order', () => {
  return false
})
it('returns errors on order creation', () => {
  return false
})
it('returns success on order creation', () => {
  return false
})
it('returns order info', () => {
  return false
})
it('returns order list', () => {
  return false
})
it('returns order history', () => {
  return false
})
it('returns success on order status change', () => {
  return false
})
it('returns error on order status change', () => {
  return false
})

it('completes order', () => {
  return false
})
