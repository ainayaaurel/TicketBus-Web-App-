import React, { Component } from 'react'
import { Input } from 'reactstrap'
export default class SignUpForm extends Component {
  componentDidMount() {
    document.title = 'Sign Up'
  }
  render() {
    return (
      <div className='FormCenter'>
        <form className='FormFields' onSumbit={this.handleSubmit}>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              className='FormField__Input'
              placeholder='Enter your full name'
              name='name'
            />
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='address'>
              Gender
            </label>
            <Input type='select' name='Gender' id='exampleSelect'>
              <option>Female</option>
              <option>Male</option>
            </Input>
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='address'>
              Address
            </label>
            <input
              type='text'
              id='address'
              className='FormField__Input'
              placeholder='Enter your address'
              name='address'
            />
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='phone'>
              Phone
            </label>
            <input
              type='text'
              id='phone'
              className='FormField__Input'
              placeholder='Enter your phone'
              name='phone'
            />
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='email'>
              Email
            </label>
            <input
              type='text'
              id='email'
              className='FormField__Input'
              placeholder='Enter your email'
              name='email'
            />
          </div>
          <div className='FormField'>
            <label className='FormField__Label' htmlFor='address'>
              Code Position
            </label>
            <Input type='select' name='Gender' id='exampleSelect'>
              <option value='1'>Super Admin</option>
              <option value='2'>Admin</option>
            </Input>
          </div>

          <label className='FormField__CheckboxLabel'>
            <input
              className='FormField__Checkbox'
              type='checkbox'
              name='hasAgreed'
            />
            I agree all statements in{' '}
            <a href='' className='FormField__TermsLink'>
              terms of service
            </a>
          </label>
        </form>
        <button className='FormField__Button mr-20'>Sign Up</button>
      </div>
    )
  }
}
