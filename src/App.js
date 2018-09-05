import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'

import { configureStore } from './configureStore'
import { Switcher } from './switcher'

const history = createHistory()
const { store } = configureStore(history, window.REDUX_STATE)

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switcher />
      </Provider>
    )
  }
}
