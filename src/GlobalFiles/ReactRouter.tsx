import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../GlobalFiles/Global.sass'
import Home from '../Pages/Home'
import Question from '../Pages/Question'
import End from '../Pages/End'

export const ReactRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Question/:index" component={Question} />
      <Route exact path="/End" component={End} />
    </Switch>
  </BrowserRouter>
)
