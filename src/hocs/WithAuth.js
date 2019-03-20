import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { fetchCurrentUser } from '../actions/User.js'
import { Loader, Image } from 'semantic-ui-react'

const WithAuth = (WrappedComponent) => {
  class AuthorizedComponent extends Component {

    componentDidMount() {
    }

    render() {
        return <WrappedComponent />
    }
  }

  const mapStateToProps = (reduxStoreState) => {
    return {
      loggedIn: reduxStoreState.UsersReducer.loggedIn
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchCurrentUser: () => dispatch(fetchCurrentUser())
    }
  }
  return connect(mapStateToProps, { fetchCurrentUser })(AuthorizedComponent)
}

export default WithAuth