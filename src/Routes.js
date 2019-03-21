import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Profile from './components/Profile'
import Login from './components/Login'

export default () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
    </Switch>
)