import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App } from './containers/app';
import { HomePage } from './containers/home'
import { CanvasPage } from './containers/canvas'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/:token" component={CanvasPage} />
    <Route path="*" component={HomePage} />
  </Route>
)
