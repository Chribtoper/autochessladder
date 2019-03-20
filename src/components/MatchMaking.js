import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, withRouter, Link } from 'react-router-dom'
import { Icon, Loader, Header, Image, Container, Grid, Divider, Button, Form, Segment, Message } from 'semantic-ui-react';
import { connect } from 'react-redux'
import '../App.css'

class MatchMaking extends Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        document.title = "Autochess Ladder"
        return this.props.loggedIn && this.props.chessData ? (
            <Segment textAlign='center' raised placeholder>
                <Header>
                    Rank: {this.props.getRank(this.props.chessData.info.mmr_level)}
                </Header>
                <Button onClick={()=>this.handleClick()} primary>Find Match</Button>
                {this.state.clicked ? "o hi mark" : null}
            </Segment>
        ) : (
                <Segment placeholder>
                    <Loader size="massive" active inline="centered" />
                    {this.props.error ? <Redirect to="/login" /> : null}
                </Segment>
            )
    }
}

const mapStateToProps = ({ UsersReducer: { user, loggedIn, error, chessData } }) => ({
    user,
    loggedIn,
    error,
    chessData
})

export default withRouter(connect(mapStateToProps)(MatchMaking))