import 'babel-polyfill'
import React from 'preact-compat';
import { h, render } from 'preact';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoApp from './reducers'

const store = createStore(todoApp)

const rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
