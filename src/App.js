import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter, Link } from 'react-router-dom'
import Login from './components/Login.js'
import Queue from './components/Queue.js'


class App extends Component {
  render() {
    document.title = "Autochess Ladder"
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/queue" />} />
          <Route exact path ="/login" component={Login} />
          <Route exact path ="/queue" component={Queue} />
        </Switch>
      </Fragment>
    )
    }
  }


export default withRouter(App);