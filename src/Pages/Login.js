import React, { Component } from 'react';
// import {Link} from 'react-router-dom'
import { Form, FormGroup, Label, Input, Modal, ModalBody, ModalFooter, ModalHeader, Button as Tombol} from 'reactstrap';
import '../styles/formlogin.css'
import Button from '../Components/Button'
import axios from 'axios'
import config from '../utils/config'
import Loading from '../Components/Loading'

class FormLogin extends Component{
  constructor(props){
      super(props)
      this.state = {
          username: '',
          password: '',
          showModal:false,
          isLogin : false,
          modalMessage: '',
          isLoading: false,
        }
  }
  
  ketikaDisubmit = async (e) =>{
    e.preventDefault()
    this.setState ({isLoading: true})
    const isian = { username: this.state.username, password: this.state.password}
    const results = await axios.post(config.APP_BACKEND.concat(`auth/login`), isian)
    console.log('userpass', results.data.success)
    if (results.data.success) {
      this.setState({showModal: true, isLogin : true, modalMessage: results.data.msg, isLoading: false})
      //this.props.history.push('/dashboard') //untuk pindah halaman ke dashboard
    } else {
      this.setState({showModal: true, isLogin : false, modalMessage: results.data.msg, isLoading: false})
      // this.props.history.push('/login')
      // this.setState({showModal})
      // this.state.showModal
      // alert('Salah alamat BOS!')
    }
  }
  ketikaDiketik = (e) =>{
    this.setState({
      username : e.currentTarget.value
    })
  }
  ketikaDiPass = (e) =>{
    this.setState({
      password : e.currentTarget.value
    })
  }
  modalOkKlik = (LoginGak) =>{
    console.log('sssss')
    if(LoginGak){
      this.props.history.push('/dashboard') //untuk pindah halaman ke dashboard
    }else{
      this.setState({showModal : false})
    }
  }
      
      componentDidMount(){
        // this.checkLogin()
      }
    render(){ 
      const {isLoading} = this.state
    return(
      <>
      {isLoading ? <Loading /> : false}
      <div className="Login">
        <div className="Card">
          <h1 className="Title1">SHUTTLEBUS-ID</h1>
          <div className="Form"> 
        <Form onSubmit={this.ketikaDisubmit}>
          <div className="login">
        <FormGroup className="AdminUser">
          <Label for="username">Username</Label>
          <Input onChange={this.ketikaDiketik} type="text" name="username" id="username"/>
        </FormGroup>
        <FormGroup className="AdminPass">
          <Label for="Password">Password</Label>
          <Input onChange={this.ketikaDiPass} type="password" name="password" id="password"/>
        </FormGroup>
        <Button className="logins-btn">LOG IN</Button>
        <a href="#" className="Title2">Forgot Password?</a>
        </div>
        </Form>
        </div>
        </div>
      </div>
      <Modal isOpen={this.state.showModal}>
            <ModalHeader>Helloo</ModalHeader>
            <ModalBody>
                {this.state.modalMessage}
            </ModalBody>
            <ModalFooter>
              <Tombol onClick={() => this.modalOkKlik(this.state.isLogin)}>Ok</Tombol>
              
            </ModalFooter>
          </Modal>
      </>
    )
  }
}

export default FormLogin

