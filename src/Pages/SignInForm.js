import React, { Component } from 'react'

class SignInForm extends Component {
  render() {
    return (
      <div className='FormCenter'>
        <form className='FormFields' onSumbit={this.handleSubmit}>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='username'>
              Username
            </label>
            <input
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
              type='text'
              id='password'
              className='FormField__Input'
              placeholder='Password'
              name='password'
            />
          </div>
        </form>
        <button className='FormField__Button mr-20'>Sign In</button>
        <a href='#' className='FormField__Link'>
          Create an account
        </a>
      </div>
    )
  }
}

export default SignInForm
