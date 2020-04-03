import React, { Component } from 'react'
import config from '../../utils/config'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAgents } from '../../Redux/Actions/Agents'
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
  Container
} from 'reactstrap'

import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import Styled from 'styled-components'

const Bar = Styled('div')`
position: absolute;
top: 100px;
margin-left: 50px;
`

class Agents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      agents: [],
      showModal: false,
      selectedId: 0,
      startFrom: 1
    }
    // this.searchAgents = async e => {
    //   const results = await axios.get(
    //     config.APP_BACKEND.concat(`agents?search[agents]=${e.target.value}`)
    //   )
    //   const { data } = results.data
    //   const { pageInfo } = results.data
    //   this.setState({ agents: data, pageInfo })
    // }
    // this.deleteData = async () => {
    //   const results = await axios.delete(
    //     config.APP_BACKEND.concat(`agents/${this.state.selectedId}`)
    //   )
    //   if (results.data.success) {
    //     console.log('test')
    //     const newData = await axios.get(config.APP_BACKEND.concat('agents'))
    //     const { data } = newData.data
    //     this.setState({ agents: data, selectedId: 0 })
    //   } else {
    //     console.log(results.data)
    //     console.log('yes')
    //   }
    // }
  }
  componentDidMount() {
    this.props.getAgents()
    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${localStorage.getItem('token_admin')}`
    // const results = await axios.get(config.APP_BACKEND.concat('agents'))
    // console.log('ini data', results)
    // const { data } = results.data
    // console.log(data)
    // this.setState({ agents: data })
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
              <Col md={4}>
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
                <Link className='btn btn-warning' to={`agents/create`}>
                  ADD AGENTS
                </Link>
              </Col>
            </Row>
            {this.props.agents && this.props.agents.length !== 0 ? (
              <Table bordered>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name Agents</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.agents &&
                    this.props.agents.map((v, i) => (
                      <tr key={this.props.agents[i].id}>
                        <td>{v.id}</td>
                        <td>{v.name_agents}</td>
                        <td>
                          <Link
                            className='btn btn-warning'
                            to={`agents/edit/${v.id}`}
                          >
                            Edit
                        </Link>
                          <Button
                            className='ml-2'
                            onClick={() =>
                              this.setState({
                                showModal: true,
                                selectedId: this.state.agents[i].id
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
            <Modal isOpen={this.state.showModal}>
              <ModalHeader>Delete User</ModalHeader>
              <ModalBody>Really want to delete?</ModalBody>
              <ModalFooter>
                <Button color='success' onClick={this.deleteData}>
                  OK
                </Button>
                <Button
                  color='danger'
                  onClick={() =>
                    this.setState({ showModal: false, selectedId: 0 })
                  }
                >
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Bar>
        </Container>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    agents: state.agents.agents
  }
}
export default connect(mapStateToProps, { getAgents })(Agents)
