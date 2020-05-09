import React, { Component } from 'react'
import axios from 'axios'
import config from '../utils/config'
import Loading from '../Components/Loading'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAdmin } from '../Redux/Actions/Auth'

class SignInForm extends Component {
  state = {
    username: '',
    password: '',
    showModal: false,
    isLogin: false,
    modalMessage: '',
    isLoading: false,
  }

  componentWillMount() {
    if (localStorage.getItem('token_admin')) {
      this.setState({
        isLogin: true,
      })
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.setState({ isLoading: true })
    const data = {
      username: this.state.username,
      password: this.state.password,
    }
    console.log('ini data', data)
    this.props.loginAdmin(data, (status) => {
      console.log(status, 'ASDDSDSDSDS')
      if (status) {
        // this.props.history.push('/dashboard')
        // this.history.push('/dashboard')
        this.setState({ isLogin: true })
        window.location.reload(true)
      }
    })
  }

  ketikaDiketik = (e) => {
    this.setState({
      username: e.currentTarget.value,
    })
  }
  ketikaDiPass = (e) => {
    this.setState({
      password: e.currentTarget.value,
    })
  }
  modalOkKlik = (isLogin) => {
    console.log('sssss')
    if (isLogin) {
      //untuk pindah halaman ke dashboard
    } else {
      this.setState({ showModal: false })
    }
  }

  render() {
    return (
      <>
        {this.state.isLogin ? (
          <Redirect to='/dashboard' />
        ) : (
          <div className='FormCenter'>
            <form className='FormFields' onSubmit={this.onSubmit}>
              <div className='FormField'>
                <label className='FormField__Label' htmlFor='username'>
                  Username
                </label>
                <input
                  onChange={this.ketikaDiketik}
                  type='text'
                  id='username'
                  className='FormField__Input'
                  placeholder='Username'
                  name='username'
                />
              </div>

              <div className='FormField'>
                <label className='FormField__Label' htmlFor='password'>
                  Password
                </label>
                <input
                  onChange={this.ketikaDiPass}
                  type='password'
                  id='password'
                  className='FormField__Input'
                  placeholder='Password'
                  name='password'
                />
              </div>
              <button type='submit' className='FormField__Button mr-20'>
                Sign In
              </button>
              {/* <a href='#' className='FormField__Link'>
                Create an account
              </a> */}
            </form>
          </div>
        )}
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth.isLogin,
  }
}

export default connect(mapStateToProps, { loginAdmin })(SignInForm)
