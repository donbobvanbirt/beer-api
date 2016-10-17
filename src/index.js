import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import Layout from './components/Layout'
import GetRand from './components/GetRand'
//
// import EarthSandwitch from './components/EarthSandwitch'

render(
  <Router history ={browserHistory}>
    <Route path ='/' component ={Layout}>
      <IndexRoute component ={GetRand}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
