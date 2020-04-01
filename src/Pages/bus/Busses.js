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
  Pagination
} from 'reactstrap'
import { Link } from 'react-router-dom'
import NavbarMain from '../../Components/NavbarMain'
import Styled from 'styled-components'
import Sidebar from '../../Components/Sidebar'
// import { BrowserRouter, Route, Link } from
import TableBus from '../Dashboard'

const Bar = Styled('div')`
margin-top: -1440px;
margin-left: 50px;
`

class Busses extends Component {
  constructor(props) {
    super(props)
    this.state = {
      busses: [],
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
    this.nextData = async () => {
      console.log('XSSSSSS')
      const results = await axios.get(
        config.APP_BACKEND.concat(`busses?page=${3}`)
      )
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({
        busses: data,
        pageInfo,
        startFrom: this.state.startFrom + pageInfo.perPage
      })
    }
    this.prevData = async () => {
      const results = await axios.get(
        config.APP_BACKEND.concat(`busses?page=${1}`)
      )
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({
        busses: data,
        pageInfo,
        startFrom: this.state.startFrom - pageInfo.perPage
      })
    }
    this.searchBus = async e => {
      const results = await axios.get(
        config.APP_BACKEND.concat(`busses?search[busses]=${e.target.value}`)
      )
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({ busses: data, pageInfo })
    }
    this.deleteData = async () => {
      const results = await axios.delete(
        config.APP_BACKEND.concat(`busses/${this.state.selectedId}`)
      )
      if (results.data.success) {
        // console.log('test')
        const newData = await axios.get(config.APP_BACKEND.concat('busses'))
        const { data } = newData.data
        const { pageInfo } = newData.data
        this.setState({ busses: data, selectedId: 0, pageInfo })
      } else {
        console.log(results.data)
        console.log('yes')
      }
    }
  }
  async componentDidMount() {
    console.log('Bingo!')
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token_admin')}`
    const results = await axios.get(config.APP_BACKEND.concat('busses'))
    console.log('ini bus', results)
    const { data } = results.data
    const { pageInfo } = results.data
    this.setState({ busses: data, pageInfo })
  }
  render() {
    console.log('data', this.state.busses)
    return (
      <>
        <NavbarMain />
        <Row>
          <Col md={1}>
            <Sidebar />
          </Col>
        </Row>
        <Container>
          <Bar>
            <Row>
              <Col md={6}>
                <Form>
                  <FormGroup>
                    <Input
                      type='text'
                      placeholder='Search Bus ...'
                      onChange={this.searchBus}
                    />
                  </FormGroup>
                </Form>
              </Col>
              <Col md={3}>
                <Link
                  className='btn btn-warning'
                  to={`busses/create`}
                  style={{ marginLeft: '100px' }}
                >
                  ADD BUS
                </Link>
              </Col>
            </Row>
            {this.state.busses.length !== 0 ? (
              <Table bordered>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name Bus</th>
                    <th>Class Bus</th>
                    <th>Sheets</th>
                    <th>Price</th>
                    <th>Agents</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.busses.length &&
                    this.state.busses.map((v, i) => (
                      <tr key={this.state.busses[i].id}>
                        <td>{this.state.startFrom + i}</td>
                        <td>{v.name}</td>
                        <td>{v.class}</td>
                        <td>{v.sheets}</td>
                        <td>{v.price}</td>
                        <td>{v.name_agents}</td>
                        <td>
                          <Link
                            className='btn btn-warning'
                            to={`busses/edit/${v.id}`}
                          >
                            Edit
                          </Link>
                          <Button
                            className='ml-2'
                            onClick={() =>
                              this.setState({
                                showModal: true,
                                selectedId: this.state.busses[i].id
                              })
                            }
                            color='danger'
                          >
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            ) : (
              <div>Data tidak tersedia</div>
            )}

            <Row>
              <Col md={12} className='text-right'>
                Page {this.state.pageInfo.page}/{this.state.pageInfo.totalPage}{' '}
                Total Data {this.state.pageInfo.totalData} Limit{' '}
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
        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Alert</ModalHeader>
          <ModalBody>{this.state.modalMessage}</ModalBody>
          <ModalFooter>
            <Button onClick={this.dismissModal}>Ok</Button>
          </ModalFooter>
        </Modal>
      </>
    )
  }
}
export default Busses
