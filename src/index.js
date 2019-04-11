import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Profile, Post } from 'pages'
import * as serviceWorker from './serviceWorker'
import { Routes } from 'utils'
import './index.scss'

ReactDOM.render(<BrowserRouter>
  <Switch>
    <Route exact path={Routes.ACTIVE.ROOT} component={Home} />
    <Route exact path={Routes.ACTIVE.SHOW.USER} component={Profile} />
    <Route path={Routes.ACTIVE.SHOW.POST} component={Post} />
  </Switch>
</BrowserRouter>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
