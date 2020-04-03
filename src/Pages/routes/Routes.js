import React, { Component } from 'react'
import config from '../../utils/config'
import axios from 'axios'
import { connect } from 'react-redux'
import { getRoutes } from '../../Redux/Actions/Routes'
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
import Sidebar from '../../Components/Sidebar'
import Styled from 'styled-components'

const Bar = Styled('div')`
position: absolute;
top: 100px;
margin-left: 50px;
`

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      routes: [],
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
    // this.nextData = async () => {
    //   console.log('XSSSSSS')
    //   const results = await axios.get(
    //     config.APP_BACKEND.concat(`routes?page=${2}`)
    //   )
    //   const { data } = results.data
    //   const { pageInfo } = results.data
    //   this.setState({
    //     routes: data,
    //     pageInfo,
    //     startFrom: this.state.startFrom + pageInfo.perPage
    //   })
    // }
    // this.prevData = async () => {
    //   const results = await axios.get(
    //     config.APP_BACKEND.concat(`routes?page=${1}`)
    //   )
    //   const { data } = results.data
    //   const { pageInfo } = results.data
    //   this.setState({
    //     routes: data,
    //     pageInfo,
    //     startFrom: this.state.startFrom - pageInfo.perPage
    //   })
    // }
    // this.searchRoutes = async e => {
    //   const results = await axios.get(
    //     config.APP_BACKEND.concat(`routes?search[routes]=${e.target.value}`)
    //   )
    //   const { data } = results.data
    //   const { pageInfo } = results.data
    //   this.setState({ routes: data, pageInfo })
    // }
    // this.deleteData = async () => {
    //   const results = await axios.delete(
    //     config.APP_BACKEND.concat(`routes/${this.state.selectedId}`)
    //   )
    //   if (results.data.success) {
    //     console.log('test')
    //     const newData = await axios.get(config.APP_BACKEND.concat('routes'))
    //     const { data } = newData.data
    //     const { pageInfo } = newData.data
    //     this.setState({ routes: data, selectedId: 0, pageInfo })
    //   } else {
    //     console.log(results.data)
    //     console.log('yes')
    //   }
    // }
  }
  componentDidMount() {
    this.props.getRoutes()
    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${localStorage.getItem('token_admin')}`
    // const results = await axios.get(config.APP_BACKEND.concat('routes'))
    // console.log('ini rute', results)
    // const { data } = results.data
    // this.setState({ routes: data })
  }
  render() {
    console.log('data', this.state.routes)
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
                      placeholder='Search Routes ...'
                      onChange={this.searchRoutes}
                    />
                  </FormGroup>
                </Form>
              </Col>
              <Col md={3}>
                <Link className='btn btn-warning' to={`routes/create`}>
                  ADD ROUTES
                </Link>
              </Col>
            </Row>
            {this.props.routes && this.props.routes.length !== 0 ? (
              <Table bordered>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Departure_at</th>
                    <th>Arrival_at</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.routes &&
                    this.props.routes.map((v, i) => (
                      <tr key={this.props.routes[i].id}>
                        <td>{v.id}</td>
                        <td>{v.departure_at}</td>
                        <td>{v.arrival_at}</td>
                        <td>
                          <Link
                            className='btn btn-warning'
                            to={`routes/edit/${v.id}`}
                          >
                            Edit
                          </Link>
                          <Button
                            className='ml-2'
                            onClick={() =>
                              this.setState({
                                showModal: true,
                                selectedId: this.state.routes[i].id
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
                <div>Data Tidak Tersedia</div>
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
                <Pagination onClick={this.prevData}>Prev</Pagination>
              </Col>
              <Col md={6} className='text-center'>
                <Pagination onClick={this.nextData}>Next</Pagination>
              </Col>
            </Row>
          </Bar>
        </Container>
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

const mapStateToProps = (state) => {
  return {
    routes: state.routes.routes
  }
}
export default connect(mapStateToProps, { getRoutes })(Routes)
