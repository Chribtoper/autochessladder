import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter, Link } from 'react-router-dom'
import { Header, Image, Container, Grid, Divider, Button, Form, Segment, Message } from 'semantic-ui-react';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {

  }

  handleClick = () => {
    axios.get(`http://localhost:8080/account`)
      .then(r => {
        debugger
      })
  }

  render() {
    // <Button onClick={()=>this.handleClick()}>Sign In</Button>
    return (
      <>
        <Button href='http://localhost:8080/auth/steam'>login</Button>
        <Button onClick={()=>this.handleClick()}>Account</Button>
      </>
    );
  }
}

export default App;