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
import Sidebar from '../../Components/Sidebar'
import Styled from 'styled-components'
import { getSchedules } from '../../Redux/Actions/Schedules'
import { connect } from 'react-redux'

const Bar = Styled('div')`
position: absolute;
top: 100px;
margin-left: 50px;
`

class Schedules extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedules: [],
      // pageInfo: {
      //   page: 0,
      //   perPage: 0,
      //   totalData: 0,
      //   totalPage: 0,
      //   nextLink: null,
      //   prevLink: null
      // },
      // currentPage: 1,
      // showModal: false,
      // selectedId: 0,
      // startFrom: 1
    }
  }

  componentDidMount() {
    this.props.getSchedules()


    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${localStorage.getItem('token_admin')}`
    // const results = await axios.get(config.APP_BACKEND.concat('schedules'))
    // console.log('ini schedules', results)
    // const { data } = results.data
    // const { pageInfo } = results.data
    // this.setState({ schedules: data, pageInfo })
  }
  render() {
    console.log('data', this.state.schedules)
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
                      placeholder='Search Schedules ...'
                      onChange={this.searchSchedules}
                    />
                  </FormGroup>
                </Form>
              </Col>
              <Col md={3}>
                <Link className='btn btn-warning' to={`schedules/create`}>
                  ADD SCHEDULES
                </Link>
              </Col>
            </Row>
            {this.props.schedules && this.state.schedules.length !== 0 ? (
              <Table bordered>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Name Bus</th>
                    <th>Time</th>
                    <th>Class Bus</th>
                    <th>Capasity Consument</th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.schedules &&
                    this.props.schedules.map((v, i) => (
                      <tr key={this.state.schedules[i].id}>
                        <td>{this.state.startFrom + i}</td>
                        <td>{v.departure_at}</td>
                        <td>{v.arrival_at}</td>
                        <td>{v.name}</td>
                        <td>{v.time}</td>
                        <td>{v.class}</td>
                        <td>{v.sheets}</td>
                        <td>{v.price}</td>
                        <td>
                          <Link
                            className='btn btn-warning'
                            to={`schedules/edit/${v.id}`}
                          >
                            Edit
                          </Link>
                          <Button
                            className='ml-2'
                            onClick={() =>
                              this.setState({
                                showModal: true,
                                selectedId: this.state.schedules[i].id
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

            {/* <Row>
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
            </Row> */}
          </Bar>
        </Container>
        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Edit User</ModalHeader>
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button color='success' onClick={this.saveEdit}>
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
        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Delete Schedules</ModalHeader>
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
    schedules: state.schedules.schedules
  }
}
export default connect(mapStateToProps, { getSchedules })(Schedules)
