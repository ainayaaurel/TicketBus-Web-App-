import React, { Component } from 'react'
import config from '../../utils/config'
import axios from 'axios'
import {
  Table,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Pagination,
} from 'reactstrap'
import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import Styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'

const Bar = Styled('div')`
position: absolute;
top: 100px;
margin-left: 50px;
margin-top: 30px;
`

class BiodataUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users_details: [],
      pageInfo: {
        page: 0,
        perPage: 0,
        totalData: 0,
        totalPage: 0,
        nextLink: null,
        prevLink: null,
      },
      currentPage: 1,
      showModal: false,
      selectedId: 0,
      startFrom: 1,
    }
    this.nextData = async () => {
      console.log('XSSSSSS')
      const results = await axios.get(
        config.APP_BACKEND.concat(`userdetails??page=${1}`)
      )
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({
        users_details: data,
        pageInfo,
        startFrom: this.state.startFrom + pageInfo.perPage,
      })
    }
    this.prevData = async () => {
      const results = await axios.get(
        config.APP_BACKEND.concat(`userdetails??page=${1}`)
      )
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({
        users_details: data,
        pageInfo,
        startFrom: this.state.startFrom - pageInfo.perPage,
      })
    }
    this.searchUser = async (e) => {
      const results = await axios.get(
        config.APP_BACKEND.concat(
          `userdetails?search[users_details]=${e.target.value}`
        )
      )
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({ users_details: data, pageInfo })
    }
    this.deleteData = async () => {
      const results = await axios.delete(
        config.APP_BACKEND.concat(`userdetails/${this.state.selectedId}`)
      )
      if (results.data.success) {
        console.log('test')
        const newData = await axios.get(
          config.APP_BACKEND.concat('userdetails')
        )
        const { data } = newData.data
        const { pageInfo } = newData.data
        this.setState({ users_details: data, selectedId: 0, pageInfo })
      } else {
        console.log(results.data)
        console.log('yes')
      }
    }
  }
  async componentDidMount() {
    const results = await axios.get(config.APP_BACKEND.concat('userdetails'))
    console.log('ini data user', results)
    const { data } = results.data
    const { pageInfo } = results.data
    this.setState({ users_details: data, pageInfo })
  }
  render() {
    console.log('data', this.state.users_details)
    return (
      <>
        <NavbarMain />
        <Row>
          <Col md={1}>
            <Sidebar />
          </Col>
          <Container>
            <Bar>
              <Row>
                <Col md={11}>
                  <Form>
                    <FormGroup>
                      <Input
                        type='text'
                        placeholder='Search User ...'
                        onChange={this.searchUser}
                      />
                    </FormGroup>
                  </Form>
                </Col>
              </Row>
              <Table bordered>
                <thead>
                  <tr>
                    <th width='2%'>No</th>
                    <th width='2%'>Picture</th>
                    <th width='5%'>Name</th>
                    <th width='5%'>Gender</th>
                    <th width='5%'>Address</th>
                    <th width='10%'>Phone</th>
                    <th width='5%'>Email</th>
                    <th width='1%'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.users_details.length &&
                    this.state.users_details.map((v, i) => (
                      <tr key={this.state.users_details[i].id}>
                        <td>{this.state.startFrom + i}</td>
                        <td width='5%'>
                          <img
                            width='100%'
                            src={config.APP_BACKEND.concat('files/').concat(
                              this.state.users_details[i].picture
                            )}
                          />
                        </td>
                        <td>{this.state.users_details[i].name}</td>
                        <td>{this.state.users_details[i].gender}</td>
                        <td>{this.state.users_details[i].address}</td>
                        <td>{this.state.users_details[i].phone}</td>
                        <td>{this.state.users_details[i].email}</td>
                        <td>
                          <FaTrashAlt
                            color='black'
                            size='25px'
                            title='DELETE'
                            position='center'
                          />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
              <Row>
                <Col md={12} className='text-right'>
                  Page {this.state.pageInfo.page}/
                  {this.state.pageInfo.totalPage} Total Data{' '}
                  {this.state.pageInfo.totalData} Limit{' '}
                  {this.state.pageInfo.perPage}
                </Col>
              </Row>
              <Row>
                <Col md={6} className='text-center'>
                  <Button onClick={this.prevData} color='primary'>
                    Prev
                  </Button>
                </Col>
                <Col md={6} className='text-center'>
                  <Button onClick={this.nextData} color='primary'>
                    Next
                  </Button>
                </Col>
              </Row>
            </Bar>
          </Container>
        </Row>

        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Delete User</ModalHeader>
          <ModalBody>Really want to delete?</ModalBody>
          <ModalFooter>
            <Button color='success' onClick={this.deleteData}>
              OK
            </Button>
            <Button
              color='danger'
              onClick={() => this.setState({ showModal: false, selectedId: 0 })}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}
export default BiodataUsers
