import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getRoutes,
  searchDataRoutes,
  movePageRoutes,
  deleteRoutes,
} from '../../Redux/Actions/Routes'
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
} from 'reactstrap'
import { Link } from 'react-router-dom'
import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import Pagination from '../../Components/Paginations'
import Styled from 'styled-components'
import { FaSearch, FaTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { MdPlaylistAdd } from 'react-icons/md'

const Bar = Styled('div')`

`
const BtnSearch = Styled(Button)`
  width: 40px;
  height: 38px;
  border-radius: 5px;
  background: #F96E16;
  margin-left: -70px;
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
        prevLink: null,
      },
      currentPage: 1,
      showModal: false,
      selectedId: 0,
      startFrom: 1,
      departure_at: '',
    }
    this.searchRoutes = (e) => {
      this.setState({
        departure: e.currentTarget.value,
      })
    }
    this.ktikaDiKlik = (e) => {
      this.props.searchDataRoutes(this.state.departure)
    }
    this.onPageChanged = (data) => {
      const { currentPage, totalPages, pageLimit } = data
      this.props.movePageRoutes(currentPage)
      console.log(data)
    }
  }
  deleteRoutes = (id) => {
    this.props.deleteRoutes(id)
    this.props.history.push('/routes')
    this.setState({
      showModal: false,
    })
    this.props.getRoutes()
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.getRoutes()
    }, 1000)
  }
  render() {
    console.log('data', this.state.routes)
    return (
      <>
        <NavbarMain />
        <Row style={{ marginRight: 0 }}>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10}>
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
                  <BtnSearch className='blue' onClick={this.ktikaDiKlik}>
                    <FaSearch />
                  </BtnSearch>
                </Col>
                <Col md={3}>
                  <Link
                    className='btn'
                    to={`routes/create`}
                    style={{
                      marginLeft: '100px',
                      backgroundColor: '#42A845',
                    }}
                  >
                    <MdPlaylistAdd
                      color='black'
                      size='30px'
                      title='CREATE ROUTES'
                      position='center'
                    />
                  </Link>
                </Col>
              </Row>
              {this.props.routes && this.props.routes.length !== 0 ? (
                <Table bordered>
                  <thead>
                    <tr>
                      <th width='5%'>No</th>
                      <th>Departure_at</th>
                      <th>Arrival_at</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.routes &&
                      this.props.routes.length !== 0 &&
                      this.props.routes.map((v, i) => {
                        const { page, perPage } = this.props.pageInfo
                        return (
                          <tr key={this.props.routes[i].id}>
                            <td>{(page - 1) * perPage + (i + 1)}</td>
                            <td>{v.departure_at}</td>
                            <td>{v.arrival_at}</td>
                            <td>
                              <Link to={`routes/edit/${v.id}`}>
                                <FiEdit
                                  color='black'
                                  size='25px'
                                  title='EDIT'
                                  position='center'
                                />
                              </Link>
                              <FaTrashAlt
                                color='black'
                                size='25px'
                                title='DELETE'
                                position='center'
                                onClick={() =>
                                  this.setState({
                                    showModal: true,
                                    selectedId: v.id,
                                  })
                                }
                              />
                            </td>
                          </tr>
                        )
                      })}
                  </tbody>
                </Table>
              ) : (
                <div>Data Tidak Tersedia</div>
              )}

              <Row>
                <Col md={12} className='text-right'>
                  Page {this.props.pageInfo && this.props.pageInfo.page}/
                  {this.props.pageInfo && this.props.pageInfo.totalPage} Total
                  Data {this.props.pageInfo && this.props.pageInfo.totalData}{' '}
                  Limit {this.props.pageInfo && this.props.pageInfo.perPage}
                </Col>
              </Row>
              <Row>
                <Col
                  md={12}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Pagination
                    totalRecords={
                      this.props.pageInfo && this.props.pageInfo.totalData
                    }
                    pageLimit={
                      this.props.pageInfo && this.props.pageInfo.perPage
                    }
                    pageNeighbours={0}
                    onPageChanged={this.onPageChanged}
                  />
                </Col>
              </Row>
            </Bar>
          </Col>
        </Row>

        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Delete User</ModalHeader>
          <ModalBody>Really want to delete?</ModalBody>
          <ModalFooter>
            <Button
              color='success'
              onClick={() => this.deleteRoutes(this.state.selectedId)}
            >
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
    routes: state.routes.routes,
    data: state.routes.singleData,
    pageInfo: state.routes.pageInfo,
  }
}
export default connect(mapStateToProps, {
  getRoutes,
  searchDataRoutes,
  movePageRoutes,
  deleteRoutes,
})(Routes)
