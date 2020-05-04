// import React, { Component } from 'react'
// // import { Link } from 'react-router-dom'
// import {
//   Form,
//   FormGroup,
//   Label,
//   Input,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
//   Button as Tombol,
// } from 'reactstrap'
// import '../styles/formlogin.css'
// import Button from '../Components/Button'

// class FormLogin extends Component {
//   // ketikaDisubmit = async (e) => {
//   //   e.preventDefault()
//   //   this.setState({ isLoading: true })
//   //   const isian = {
//   //     username: this.state.username,
//   //     password: this.state.password,
//   //   }
//   //   const results = await axios.post(
//   //     config.APP_BACKEND.concat(`auth/login`),
//   //     isian
//   //   )
//   //   console.log('userpass', results.data.success)
//   //   if (results.data.success) {
//   //     localStorage.setItem('token_admin', results.data.token)
//   //     this.setState({
//   //       showModal: true,
//   //       isLogin: true,
//   //       modalMessage: results.data.msg,
//   //       isLoading: false,
//   //     })
//   //     //this.props.history.push('/dashboard') //untuk pindah halaman ke dashboard
//   //   } else {
//   //     this.setState({
//   //       showModal: true,
//   //       isLogin: false,
//   //       modalMessage: results.data.msg,
//   //       isLoading: false,
//   //     })
//   // this.props.history.push('/login')
//   // this.setState({showModal})
//   // this.state.showModal
//   // alert('Salah alamat BOS!')

//   // componentDidMount() {
//   //   this.props.loginAdmin()
//   // }
//   render() {
//     const { isLoading } = this.state
//     console.log(this.props.auth)
//     return (
//       <>
//         {isLoading ? <Loading /> : false}
//         <div className='Login'>
//           <div className='Card'>
//             <h1 className='Title1'>SHUTTLEBUS-ID</h1>
//             <div className='Form'>
//               <Form onSubmit={this.onSubmit}>
//                 <div className='login'>
//                   <FormGroup className='AdminUser'>
//                     <Label for='username'>Username</Label>
//                     <Input
//                       onChange={this.ketikaDiketik}
//                       type='text'
//                       name='username'
//                       id='username'
//                     />
//                   </FormGroup>
//                   <FormGroup className='AdminPass'>
//                     <Label for='Password'>Password</Label>
//                     <Input
//                       onChange={this.ketikaDiPass}
//                       type='password'
//                       name='password'
//                       id='password'
//                     />
//                   </FormGroup>
//                   <Button className='logins-btn'>LOG IN</Button>
//                   <a href='#' className='Title2'>
//                     Forgot Password?
//                   </a>
//                 </div>
//               </Form>
//             </div>
//           </div>
//         </div>
//         <Modal isOpen={this.state.showModal}>
//           <ModalHeader>Helloo Welcome to SHUTTLEBUS-ID</ModalHeader>
//           <ModalBody>{this.state.modalMessage}</ModalBody>
//           <ModalFooter>
//             <Tombol onClick={() => this.modalOkKlik(this.state.isLogin)}>
//               Ok
//             </Tombol>
//           </ModalFooter>
//         </Modal>
//       </>
//     )
//   }
// }
