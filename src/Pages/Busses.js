import React, {Component} from 'react'
import config from '../utils/config'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class Busses extends Component{
  constructor(props){
    super(props)
    this.state = {
      busses: [],
      showModal: false,
      selectedId: 0,
      startFrom: 1
  }
this.deleteData = async()=> {
  const results = await axios.delete(config.APP_BACKEND.concat(`busses/${this.state.selectedId}`))
  if(results.data.success){
    console.log('test')
    const newData = await axios.get(config.APP_BACKEND.concat('busses'))
    const {data} = newData.data
    // const {pageInfo} = newData.data
    this.setState({busses:data, selectedId:0})
  }else {
    console.log(results.data)
    console.log("yes")
  }
}
}
async componentDidMount(){
  const results = await axios.get(config.APP_BACKEND.concat('busses'))
  const {data} = results.data
  this.setState({busses:data})
}
  render(){
    console.log('data', this.state.busses)
    return(
      <>
      <Table bordered>
      <thead>
        <tr>
          <th>No</th>
          {/* <th>Agents</th> */}
          <th>Name Bus</th>
          <th>Class Bus</th>
          <th>Sheets</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
              {this.state.busses.length && this.state.busses.map((v,i)=>(
                <tr key={this.state.busses[i].id}>
                  {/* <td>{(this.state.startFrom + i)}</td> */}
                  <td>{v.id}</td>
                  <td>{v.name}</td>
                  <td>{v.class}</td>
                  <td>{v.sheets}</td>
                  <td>{v.price}</td>
                  <td>
                    <Link className='btn btn-warning'>
                      Edit
                    </Link>
                    <Button className='ml-2' onClick={()=>this.setState({showModal: true, selectedId: this.state.busses[i].id})} color='danger'>
                        Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
      </Table>
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
export default Busses