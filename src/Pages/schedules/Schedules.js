import React, { Component } from 'react'
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
import Styled from 'styled-components'
import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import Pagination from '../../Components/Paginations'
import {
  getSchedules,
  searchDataSchedules,
  movePageSchedules,
  sortByTime,
  deleteBus,
} from '../../Redux/Actions/Schedules'
import { connect } from 'react-redux'
import {
  FaSearch,
  FaTrashAlt,
  FaSortAmountUp,
  FaSortAmountDown,
} from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { MdPlaylistAdd } from 'react-icons/md'
import { TiArrowUnsorted } from 'react-icons/ti'
const Bar = Styled('div')`
position: absolute;
top: 100px;
margin-left: 50px;
margin-top: 30px;
`
const BtnSearch = Styled(Button)`
  width: 40px;
  height: 38px;
  border-radius: 5px;
  background: #F96E16;
  margin-left: -70px;
`
class Schedules extends Component {
  constructor(props) {
    super(props)
    this.state = {
      schedules: [],
      pageInfo: {
        page: 0,
        perPage: 0,
        totalData: 0,
        totalPage: 0,
        nextLink: null,
        prevLink: null,
      },
      id: 0,
      sortValue: 0,
      currentPage: 1,
      showModal: false,
      selectedId: 0,
      startFrom: 1,
      departure: '',
    }
    this.searchSchedules = (e) => {
      this.setState({
        departure: e.currentTarget.value,
      })
    }
    this.ktikaDiKlik = (e) => {
      this.props.searchDataSchedules(this.state.departure)
    }
    this.onPageChanged = (data) => {
      const { currentPage, totalPages, pageLimit } = data
      this.props.movePageSchedules(currentPage)
      console.log(data)
    }
  }
  sortBy = (column) => {
    const sortValue =
      this.state.sortValue === 0
        ? this.state.sortValue + 1
        : this.state.sortValue - 1
    this.setState({
      sortValue: sortValue,
    })
    const query = `schedules/?date=2020-05-01&sort[value]=${this.state.sortValue}&sortBy=${column}`
    this.props.sortByTime(null, query)
  }

  deleteBus = (id) => {
    this.props.deleteBus(id)
    this.props.history.push('/schedules')
    this.setState({
      showModal: false,
    })
    this.props.getSchedules()
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.getSchedules()
    }, 1000)
    document.title = 'Schedules'
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
              <Col md={2}>
                <BtnSearch className='blue' onClick={this.ktikaDiKlik}>
                  <FaSearch />
                </BtnSearch>
              </Col>
              <Col md={2}>
                <Link
                  className='btn'
                  to={`schedules/create`}
                  style={{ marginLeft: '100px', backgroundColor: '#42A845' }}
                >
                  <MdPlaylistAdd
                    color='black'
                    size='30px'
                    title='CREATE SCHEDULES'
                    position='center'
                  />
                </Link>
              </Col>
            </Row>
            {this.props.schedules && this.props.schedules.length !== 0 ? (
              <Table bordered>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                    <th>Name Bus</th>
                    <th onClick={() => this.sortBy('schedules.time')}>
                      Time <TiArrowUnsorted color='black' size='23px' />{' '}
                    </th>
                    <th>Class Bus</th>
                    <th>Capasity Consument</th>
                    <th onClick={() => this.sortBy('busses.price')}>
                      Price <TiArrowUnsorted color='black' size='23px' />
                    </th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.schedules &&
                    this.props.schedules.length &&
                    this.props.schedules.map((v, i) => {
                      const { page, perPage } = this.props.pageInfo
                      return (
                        <tr key={this.props.schedules[i].id}>
                          <td>{(page - 1) * perPage + (i + 1)}</td>
                          <td>{v.departure_at}</td>
                          <td>{v.arrival_at}</td>
                          <td>{v.name}</td>
                          <td>{v.time}</td>
                          <td>{v.class}</td>
                          <td>{v.sheets}</td>
                          <td>{v.price}</td>
                          <td>
                            <Link to={`schedules/edit/${v.id}`}>
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
                  pageLimit={this.props.pageInfo && this.props.pageInfo.perPage}
                  pageNeighbours={0}
                  onPageChanged={this.onPageChanged}
                />
              </Col>
            </Row>
          </Bar>
        </Container>
        <Modal isOpen={this.state.showModal}>
          <ModalHeader>Delete Schedules</ModalHeader>
          <ModalBody>Really want to delete?</ModalBody>
          <ModalFooter>
            <Button
              color='success'
              onClick={() => this.deleteBus(this.state.selectedId)}
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
    schedules: state.schedules.schedules,
    pageInfo: state.schedules.pageInfo,
  }
}
export default connect(mapStateToProps, {
  getSchedules,
  searchDataSchedules,
  movePageSchedules,
  sortByTime,
  deleteBus,
})(Schedules)
