import React, { Component } from 'react'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import { loadField } from './util/localStorage'

import { configureStore, sagaMiddleware } from './configureStore'
import { Switcher } from './switcher'
import { rootSaga } from './rootSaga'

const history = createHistory()
const session = loadField('session')
const savedState = { rootReducer: { session: session, _session: session } }
const { store } = configureStore(history, savedState)

sagaMiddleware.run(rootSaga)

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switcher />
      </Provider>
    )
  }
}
