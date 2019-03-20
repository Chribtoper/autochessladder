import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter, Link } from 'react-router-dom'
import { Loader, Header, Image, Container, Grid, Divider, Button, Form, Segment, Message } from 'semantic-ui-react';
import { fetchCurrentUser, fetchChessData } from '../actions/User.js'
import { connect } from 'react-redux'
import '../App.css'
import MatchMaking from './MatchMaking'

class Queue extends Component {

    state = {
        failed: null
    }

  componentWillMount() {
    if (!this.props.loggedIn) {
            this.props.fetchCurrentUser()
        .then((id) => {
            this.props.fetchChessData(id)
        })
    }
  }

  getRank = (rank) => {
    switch (true) {
        case (rank < 10):
        return (<><Image src={require('../images/pawn.png')} size='large' wrapped/><span style={spanStyle}>{rank}</span></>)
        case (rank > 9 && rank < 19):
        return (<><Image src={require('../images/knight.png')} size='large' wrapped/><span style={spanStyle}>{rank-9}</span></>)
        case (rank > 18 && rank < 28):
        return (<><Image src={require('../images/bishop.png')} size='large' wrapped/><span style={spanStyle}>{rank-18}</span></>)
        case (rank > 27 && rank < 37):
        return (<><Image src={require('../images/rook.png')} size='large' wrapped/><span style={spanStyle}>{rank-27}</span></>)
        case (rank === 37):
        return (<><Image src={require('../images/king.png')} size='large' wrapped/></>)
        case (rank === 38):
        return (<><Image src={require('../images/queen.png')} size='large' wrapped/></>)
    }
  }

  render() {
    document.title = "Autochess Ladder"
    return this.props.loggedIn && this.props.chessData ? (
      <Container>
        <h1>Queue</h1>
        <h2>Hello {this.props.user.displayName} </h2>
        <h3>ID: {this.props.user.id} </h3>
        <Image src={this.props.user.photos[2].value} size='large' wrapped/>
        <MatchMaking getRank={this.getRank} />
      </Container>
    ) : (
        <Container>
        <Loader size="massive" active inline="centered"/>
            {this.props.error ? <Redirect to="/login" /> : null}
        </Container>
    )
  }
}
// <Image onClick={()=>this.handleClick()} src='../images/steamlogo.png' size='large'/>
const spanStyle = {
    fontSize: 'xx-large'
}

const mapStateToProps = ({ UsersReducer: { user, loggedIn, error, chessData } }) => ({
    user,
    loggedIn,
    error,
    chessData
})

export default withRouter(connect(mapStateToProps, { fetchCurrentUser, fetchChessData })(Queue))