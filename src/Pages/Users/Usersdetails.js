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
} from 'reactstrap'
import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import Pagination from '../../Components/Paginations'
import Styled from 'styled-components'
import { FaTrashAlt } from 'react-icons/fa'
import {
  getAllUsers,
  movePageUsers,
  searchUser,
} from '../../Redux/Actions/MyProfil'
import { connect } from 'react-redux'
import { FaSearch } from 'react-icons/fa'

const BtnSearch = Styled(Button)`
  width: 40px;
  height: 38px;
  border-radius: 5px;
  background: #F96E16;
  margin-left: -70px;
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
      name: '',
      currentPage: 1,
      showModal: false,
      selectedId: 0,
      startFrom: 1,
    }
    this.searchUser = (e) => {
      this.setState({
        name: e.currentTarget.value,
      })
    }
    this.klikSearch = (e) => {
      this.props.searchUser(this.state.name)
    }
    this.onPageChanged = (data) => {
      const { currentPage, totalPages, pageLimit } = data
      this.props.movePageUsers(currentPage)
      console.log(data)
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.getAllUsers()
    }, 1000)
    document.title = 'Data Users'
  }
  render() {
    console.log('data', this.state.users_details)
    return (
      <>
        <NavbarMain />
        <Row style={{ marginRight: 0 }}>
          <Col md={2}>
            <Sidebar />
          </Col>
          <Col md={10} style={{ marginTop: 20 }}>
            <Row>
              <Col md={9}>
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
              <Col md={3}>
                <BtnSearch className='blue' onClick={this.klikSearch}>
                  <FaSearch />
                </BtnSearch>
              </Col>
            </Row>
            {this.props.users && this.props.users.length !== 0 ? (
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
                  {this.props.users &&
                    this.props.users.map((v, i) => {
                      const { page, perPage } = this.props.pageInfo
                      return (
                        <tr key={this.props.users[i].id}>
                          <td>{(page - 1) * perPage + (i + 1)}</td>
                          <td width='5%'>
                            <img
                              width='100%'
                              src={config.APP_BACKEND.concat('files/').concat(
                                v.picture
                              )}
                            />
                          </td>
                          <td>{v.name}</td>
                          <td>{v.gender}</td>
                          <td>{v.address}</td>
                          <td>{v.phone}</td>
                          <td>{v.email}</td>
                          <td>
                            <FaTrashAlt
                              color='black'
                              size='25px'
                              title='DELETE'
                              position='center'
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
          </Col>
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

const mapStateToProps = (state) => ({
  users: state.myprofil.usersdetails,
  pageInfo: state.myprofil.pageInfo,
})

export default connect(mapStateToProps, {
  getAllUsers,
  movePageUsers,
  searchUser,
})(BiodataUsers)
