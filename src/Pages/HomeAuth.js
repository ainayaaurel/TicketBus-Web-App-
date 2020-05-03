import React, { Component } from 'react'
import '../App.css'

import { Input } from 'reactstrap'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
class HomeAuth extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <div className='App__Aside'></div>
          <div id='App__Form'>
            <div className='PageSwitcher'>
              <a href='#' className='PageSwitcher__Item'>
                Sign In
              </a>
              <a
                href='#'
                className='PageSwitcher__Item'
                PageSwitcher__Item--Active
              >
                Sign Up
              </a>
            </div>
            <div className='FormTitle'>
              <Link to='/sign-in' className='FormTitle__Link'>
                Sign In
              </Link>{' '}
              or{' '}
              <Link
                to='/sign-up'
                className='FormTitle__Link'
                FormTitle__Link--Active
              >
                Sign Up
              </Link>
            </div>

            <Route exact path='/sign-up' component={SignUpForm}></Route>
            <Route exact path='/sign-in' component={SignInForm}></Route>
          </div>
        </div>
      </Router>
    )
  }
}
export default HomeAuth
