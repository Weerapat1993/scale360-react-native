import React from 'react'
import { Router, Route, Animations, Schema } from 'react-native-redux-router'

import Home from './pages/home'
import Task from './pages/task'
import About from './pages/about'
import Form from './pages/form'
import Menu from './pages/menu'

export default class Routes extends React.Component {
  render () {
    return (
      <Router>
        <Schema name="default" sceneConfig={Animations.FlatFloatFromRight}/>
        <Schema name="leftmenu" sceneConfig={Animations.FlatFloatFromBottom}/>

        <Route name="home" component={Home} title="Home" type="replace"/>
        <Route name="task" component={Task} title="Task" schema="default" />
        <Route name="about" component={About} title="About" schema="default" />
        <Route name="form" component={Form} title="Todo" schema="default" />
        <Route name="menu" component={Menu} title="Menu" schema="leftmenu" />
      </Router>
    )
  }
}
