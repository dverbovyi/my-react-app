import React from 'react'
import { render } from 'react-dom'
import { browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes'
import configureStore from './store/configureStore'

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

const Root = () => (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

render(
  <Root/>,
  document.getElementById('root')
)

