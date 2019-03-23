import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter, Link } from 'react-router-dom'
import { Header, Image, Container, Grid, Divider, Button, Form, Segment, Message } from 'semantic-ui-react';
import { connect } from 'react-redux'
import WithAuth from '../hocs/WithAuth.js'
import Style, { containerStyle, segmentStyle, gridStyle } from '../styles/Style.js'

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
      <Container style={containerStyle}>
        <Grid textAlign='center' style={gridStyle} verticalAlign='middle' relaxed='very' stackable>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Segment style={segmentStyle} raised padded='very'> 
              <Image href="http://localhost:3001/auth/steam" src={require('../images/steamlogo.png')} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ UsersReducer: { loggedIn } }) => ({
  loggedIn
})

export default withRouter(connect(mapStateToProps)(Login))