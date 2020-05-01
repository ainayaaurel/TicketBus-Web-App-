import React, { Component } from 'react'

import { connect } from 'react-redux'
import {
  getBus,
  searchDataBusses,
  movePageBusses,
} from '../../Redux/Actions/Busses'
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
import Pagination from '../../Components/Paginations'
import { FaSearch, FaTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { MdPlaylistAdd } from 'react-icons/md'

const Bar = Styled('div')`
position: absolute;
top: 100px;
margin-left: 50px;
`
const BtnSearch = Styled(Button)`
  width: 40px;
  height: 38px;
  border-radius: 5px;
  background: #F96E16;
  margin-left: -70px;
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
        prevLink: null,
      },
      currentPage: 1,
      showModal: false,
      selectedId: 0,
      startFrom: 1,
      name: '',
    }
    this.searchBus = (e) => {
      this.setState({
        name: e.currentTarget.value,
      })
    }
    this.ktikaDiKlik = (e) => {
      this.props.searchDataBusses(this.state.name)
    }
    this.onPageChanged = (data) => {
      const { currentPage, totalPages, pageLimit } = data
      // this.props.movePageBusses(currentPage)
      console.log(data)
    }
  }
  componentDidMount() {
    console.log('MOUNTED')
    this.props.getBus()
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
                <BtnSearch className='blue' onClick={this.ktikaDiKlik}>
                  <FaSearch />
                </BtnSearch>
              </Col>
              <Col md={3}>
                <Link
                  className='btn'
                  to={`busses/create`}
                  style={{ marginLeft: '100px', backgroundColor: '#42A845' }}
                >
                  <MdPlaylistAdd
                    color='black'
                    size='30px'
                    title='CREATE BUS'
                    position='center'
                  />
                </Link>
              </Col>
            </Row>
            {this.props.busses && this.props.busses.length !== 0 ? (
              <Table bordered>
                <thead>
                  <tr>
                    <th>No</th>
                    <th width='25%'>Name Bus</th>
                    <th>Class Bus</th>
                    <th>Sheets</th>
                    <th>Price</th>
                    <th width='30%'>Agents</th>
                    <th width='15%'>Actions</th>
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
                        <td class='text-center'>
                          <Link to={`busses/edit/${v.id}`}>
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
                          />
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
    pageInfo: state.busses.pageInfo,
  }
}

export default connect(mapStateToProps, {
  getBus,
  searchDataBusses,
  movePageBusses,
})(Busses)
