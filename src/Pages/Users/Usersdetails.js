import React, {Component} from 'react'
import config from '../utils/config'
import axios from 'axios'
import { 
  Table, Row, Col, FormGroup, Form, Input, Button, 
  Modal, ModalHeader, ModalBody, ModalFooter, Container, Pagination } 
  from 'reactstrap'
import { Link } from 'react-router-dom'

class BiodataUsers extends Component{
  constructor(props){
    super(props)
    this.state = {
      users_details: [],
      pageInfo: {
        page: 0,
        perPage: 0,
        totalData: 0,
        totalPage: 0,
        nextLink: null,
        prevLink: null
      },
      currentPage: 1,
      showModal: false,
      selectedId: 0,
      startFrom: 1
  }
  this.nextData = async() => {
    console.log('XSSSSSS')
    const results = await axios.get(config.APP_BACKEND.concat(`userdetails??page=${1}`))
    const {data} = results.data
    const {pageInfo} = results.data
    this.setState({users_details:data, pageInfo, startFrom: this.state.startFrom + pageInfo.perPage})
  }
  this.prevData = async() => {
    const results = await axios.get(config.APP_BACKEND.concat(`userdetails??page=${1}`))
    const {data} = results.data
    const {pageInfo} = results.data
    this.setState({users_details:data, pageInfo, startFrom: this.state.startFrom - pageInfo.perPage})
  }
  this.searchUser = async (e) => {
    const results = await axios.get(config.APP_BACKEND.concat(`userdetails?search[users_details]=${e.target.value}`))
    const {data} = results.data
    const {pageInfo} = results.data
    this.setState({users_details:data, pageInfo})
  }
  this.deleteData = async()=> {
  const results = await axios.delete(config.APP_BACKEND.concat(`userdetails/${this.state.selectedId}`))
  if(results.data.success){
    console.log('test')
    const newData = await axios.get(config.APP_BACKEND.concat('userdetails'))
    const {data} = newData.data
    const {pageInfo} = newData.data
    this.setState({users_details:data, selectedId:0, pageInfo})
  }else {
    console.log(results.data)
    console.log("yes")
  }
}
}
async componentDidMount(){
  const results = await axios.get(config.APP_BACKEND.concat('userdetails'))
  console.log('ini data user', results)
  const {data} = results.data
  const {pageInfo} = results.data
  this.setState({users_details:data, pageInfo})
}
  render(){
    console.log('data', this.state.users_details)
    return(
      <>
      <Container>
        <Row>
          <Col md={12}>
            <Form>
              <FormGroup>
                <Input type='text' placeholder='Search User ...' onChange={this.searchUser}/>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Table bordered>
        <thead>
          <tr>
            <th>No</th>
            <th>Picture</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
                {this.state.users_details.length && this.state.users_details.map((v,i)=>(
                  <tr key={this.state.users_details[i].id}>
                    <td>{(this.state.startFrom + i)}</td>
                    <td width='15%'><img width='100%'src={config.APP_BACKEND.concat('files/').concat(this.state.users_details[i].picture)}/></td>
                    <td>{this.state.users_details[i].name}</td>
                    <td>{this.state.users_details[i].gender}</td>
                    <td>{this.state.users_details[i].address}</td>
                    <td>{this.state.users_details[i].phone}</td>
                    <td>{this.state.users_details[i].email}</td>
                    <td>
                      <Link className='btn btn-warning' >
                        Edit
                      </Link>
                      <Button className='ml-2' onClick={()=>this.setState({showModal: true, selectedId: this.state.users_details[i].id})} color='danger'>
                          Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
        </Table>
        <Row>
              <Col md={12} className='text-right'>
                  Page {this.state.pageInfo.page}/{this.state.pageInfo.totalPage} Total Data {this.state.pageInfo.totalData} Limit {this.state.pageInfo.perPage}
              </Col>
            </Row>
            <Row>
              <Col md={6} className='text-center'>
                <Button onClick={this.prevData} color='primary'>Prev</Button>
              </Col>
              <Col md={6} className='text-center'>
                <Button  onClick={this.nextData} color='primary'>Next</Button>
              </Col>
        </Row>
      </Container>
    <Modal isOpen={this.state.showModal}>
      <ModalHeader>Delete User</ModalHeader>
      <ModalBody>Really want to delete?</ModalBody>
      <ModalFooter>
        <Button color='success' onClick={this.deleteData}>OK</Button>
        <Button color='danger' onClick={()=>this.setState({showModal: false, selectedId: 0})}>Cancel</Button>
      </ModalFooter>
    </Modal>
    </>
    )
  }
}
export default BiodataUsers