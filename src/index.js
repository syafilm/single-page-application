import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import './index.css' 
import App from './App'
import * as serviceWorker from './serviceWorker'
import Routes from './routes'

ReactDOM.render(<BrowserRouter>
  <Switch>
    <Route path={Routes.Root} component={App} />
    {/* <Route path={Route.Login} component={Login} />
    <Route path={Route.Register} component={Register} /> */}
  </Switch>
</BrowserRouter>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
