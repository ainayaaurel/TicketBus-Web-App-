import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  getAgents,
  searchDataAgents,
  movePageAgents,
} from '../../Redux/Actions/Agents'
import {
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from 'reactstrap'
import { FaSearch, FaTrashAlt } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { MdPlaylistAdd } from 'react-icons/md'
import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import Pagination from '../../Components/Paginations'
import Styled from 'styled-components'

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
class Agents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agents: [],
      showModal: false,
      selectedId: 0,
      startFrom: 1,
      name_agents: '',
    }
    this.searchAgents = (e) => {
      this.setState({
        name_agents: e.currentTarget.value,
      })
    }
    this.ktikaDiKlik = (e) => {
      this.props.searchDataAgents(this.state.name_agents)
    }
    this.onPageChanged = (data) => {
      const { currentPage, totalPages, pageLimit } = data
      this.props.movePageAgents(currentPage)
      console.log(data)
    }
  }
  componentDidMount() {
    this.props.getAgents()
    document.title = 'Agents'
  }
  render() {
    console.log('data', this.state.agents)
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
                      placeholder='Search Agents'
                      onChange={this.searchAgents}
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
                  to={`agents/create`}
                  style={{ marginLeft: '100px', backgroundColor: '#42A845' }}
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
            {this.props.agents && this.props.agents.length !== 0 ? (
              <Table bordered>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name Agents</th>
                    <th>Name Bus</th>
                    <th>Class Bus</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.agents &&
                    this.props.agents.map((v, i) => (
                      <tr key={this.props.agents[i].id}>
                        <td>{v.id}</td>
                        <td>{v.name_agents}</td>
                        <td>{v.name}</td>
                        <td>{v.class}</td>
                        <td>
                          <Link to={`agents/edit/${v.id}`}>
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
    agents: state.agents.agents,
    data: state.agents,
    pageInfo: state.agents.pageInfo,
  }
}
export default connect(mapStateToProps, {
  getAgents,
  searchDataAgents,
  movePageAgents,
})(Agents)
