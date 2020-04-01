import React, { Component } from 'react'
import config from '../../utils/config'
import axios from 'axios'
import { Link } from 'react-router-dom'
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
import styled from 'styled-components'

const BarAgents = styled('div')`
  margin-top: -1440px;
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
    this.searchAgents = async e => {
      const results = await axios.get(
        config.APP_BACKEND.concat(`agents?search[agents]=${e.target.value}`)
      )
      const { data } = results.data
      const { pageInfo } = results.data
      this.setState({ agents: data, pageInfo })
    }
    this.updateData = async () => {
      const results = await axios.update(
        config.APP_BACKEND.concat(`agents/${this.state.selectedId}`)
      )
      if (results.data.success) {
        console.log('test')
        const newData = await axios.get(config.APP_BACKEND.concat('agents'))
        const { data } = newData.data
        const { pageInfo } = newData.data
        this.setState({ agents: data, selectedId: 0, pageInfo })
      } else {
        console.log(results.data)
        console.log('yes')
      }
    }
    this.deleteData = async () => {
      const results = await axios.delete(
        config.APP_BACKEND.concat(`agents/${this.state.selectedId}`)
      )
      if (results.data.success) {
        console.log('test')
        const newData = await axios.get(config.APP_BACKEND.concat('agents'))
        const { data } = newData.data
        this.setState({ agents: data, selectedId: 0 })
      } else {
        console.log(results.data)
        console.log('yes')
      }
    }
  }
  async componentDidMount() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token_admin')}`
    const results = await axios.get(config.APP_BACKEND.concat('agents'))
    console.log('ini data', results)
    const { data } = results.data
    console.log(data)
    this.setState({ agents: data })
  }
  render() {
    console.log('data', this.state.agents)
    return (
      <>
        <NavbarMain />
        <Row>
          <Col md={2}>
            <Sidebar />
          </Col>
        </Row>
        <Container>
          <BarAgents>
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
            <Table bordered>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name Agents</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.agents.length &&
                  this.state.agents.map((v, i) => (
                    <tr key={this.state.agents[i].id}>
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
          </BarAgents>
        </Container>
      </>
    )
  }
}
export default Agents
