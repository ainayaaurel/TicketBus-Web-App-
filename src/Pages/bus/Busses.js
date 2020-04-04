import React, { Component } from 'react'
import config from '../../utils/config'
import { connect } from 'react-redux'
import { getBus, searchData, movePage } from '../../Redux/Actions/Busses'
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
import Styled from 'styled-components'
import Sidebar from '../../Components/Sidebar'
// import { BrowserRouter, Route, Link } from
import Pagination from '../../Components/Paginations'

const Bar = Styled('div')`
position: absolute;
top: 100px;
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
      startFrom: 1,
      name: '',
    }
    this.searchBus = (e) => {
      this.setState({
        name: e.currentTarget.value
      })

    }
    this.ktikaDiKlik = (e) => {
      this.props.searchData(this.state.name)
    }
    this.onPageChanged = data => {
      const { currentPage, totalPages, pageLimit } = data
      this.props.movePage(currentPage)
      console.log(data)
    }
    // this.nextData = async () => {
    //   console.log('XSSSSSS')
    //   const results = await axios.get(
    //     config.APP_BACKEND.concat(`busses?page=${3}`)
    //   )
    //   const { data } = results.data
    //   const { pageInfo } = results.data
    //   this.setState({
    //     busses: data,
    //     pageInfo,
    //     startFrom: this.state.startFrom + pageInfo.perPage
    //   })
    // }
    // this.prevData = async () => {
    //   const results = await axios.get(
    //     config.APP_BACKEND.concat(`busses?page=${1}`)
    //   )
    //   const { data } = results.data
    //   const { pageInfo } = results.data
    //   this.setState({
    //     busses: data,
    //     pageInfo,
    //     startFrom: this.state.startFrom - pageInfo.perPage
    //   })
    // }
    // this.searchBus = async e => {
    //   this.props.searchBus(e.target.value)
    //   const { data } = results.data
    //   const { pageInfo } = results.data
    //   this.setState({ busses: data, pageInfo })
    // }
    // this.deleteData = async () => {
    //   this.props.deleteData(this.state.selectedId)
    //   if (this.props.deleteData) {
    //     const newData = await axios.get(config.APP_BACKEND.concat('busses'))
    //     const { data } = newData.data
    //     const { pageInfo } = newData.data
    //     this.setState({ busses: data, selectedId: 0, pageInfo })
    //   } else {
    //     console.log(results.data)
    //     console.log('yes')
    //   }
    // }
  }
  componentDidMount() {
    // console.log(this.props)
    console.log('MOUNTED')

    this.props.getBus()
    // const { data } = results.data
    // const { pageInfo } = results.data
    // this.setState({ busses: data, pageInfo })
  }
  render() {
    console.log('props', this.props)
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
                <Button
                  className='blue'
                  onClick={this.ktikaDiKlik}
                  style={{ marginLeft: '100px' }}
                >
                  SEARCH
                </Button>
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
            {this.props.busses && this.props.busses.length !== 0 ? (
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
                  {this.props.busses.length &&
                    this.props.busses.map((v, i) => (
                      <tr key={this.props.busses[i].id}>
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
                <Pagination
                  totalRecords={this.props.pageInfo && this.props.pageInfo.totalData}
                  pageLimit={this.props.pageInfo && this.props.pageInfo.perPage}
                  pageNeighbours={0}
                  onPageChanged={this.onPageChanged}
                />
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

const mapStateToProps = (state) => {
  return {
    busses: state.busses.busses,
    pageInfo: state.busses.pageInfo
  }
}


export default connect(mapStateToProps, { getBus, searchData, movePage })(Busses)
