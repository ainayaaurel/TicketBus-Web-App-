import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import { Form, FormGroup, Label, Input } from 'reactstrap';
import '../styles/formlogin.css'
import Button from '../Components/Button'

class FormLogin extends Component{
  constructor(props){
      super(props)
      this.setState = {
          username: '',
          password: '',
        }
        this.onLogin = () => {
          const {username, password} = this.state
          if((username === 'admin') && (password === 'admin')){
              this.setState = () => {
                localStorage.setItem('token', 'true')
                this.props.check()
                this.props.history.push('/dashboard')
          }
        }
        this.checkLogin = () => {
          if(localStorage.getItem('token')){
            this.props.history.push('/dashboard')
          }
        }
      }
      componentDidMount(){
        this.checkLogin()
      }
    render(){ 
    return(
      <div className="Login">
        <div className="Card">
          <h1 className="Title1">SHUTTLEBUS-ID</h1>
          <div className="Form"> 
        <Form>
          <div className="login">
        <FormGroup className="AdminUser">
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username"/>
        </FormGroup>
        <FormGroup className="AdminPass">
          <Label for="Password">Password</Label>
          <Input type="password" name="password" id="password"/>
        </FormGroup>
        <Button className="logins-btn">LOG IN</Button>
        <a href="#" className="Title2">Forgot Password?</a>
        </div>
        </Form>
        </div>
        </div>
      </div>
      
    )
  }
}

export default FormLogin

