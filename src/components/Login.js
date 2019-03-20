import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter, Link } from 'react-router-dom'
import { Header, Image, Container, Grid, Divider, Button, Form, Segment, Message } from 'semantic-ui-react';
import { connect } from 'react-redux'
import WithAuth from '../hocs/WithAuth.js'

class Login extends Component {
  // state = {
  //   authenticated: false,
  //   failedAuth: false
  // }

  componentDidMount() {
  }

  handleClick = () => {

  }

  render() {
    document.title = "Autochess Ladder"
    return (
      <>
        <Image href="http://localhost:3001/auth/steam" src={require('../images/steamlogo.png')} size='large'/>
      </>
    );
  }
}
// <Image onClick={()=>this.handleClick()} src='../images/steamlogo.png' size='large'/>

const mapStateToProps = ({ UsersReducer: { loggedIn } }) => ({
  loggedIn
})

export default withRouter(connect(mapStateToProps)(Login))