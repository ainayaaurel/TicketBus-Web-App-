import React, { Component } from 'react'
import axios from 'axios'
import config from '../../utils/config'
import { connect } from 'react-redux'
import { getAgentsById, updateAgents } from '../../Redux/Actions/Agents'

import {
  Container,
  Form,
  FormGroup,
  Row,
  Col,
  Input,
  Label,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap'

import NavbarMain from '../../Components/NavbarMain'

class UpdateAgents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      data: {},
      name_agents: '',
      isLoading: false,
      showModal: false,
      modalMessage: '',
    }
    this.submitData = async (e) => {
      e.preventDefault()
      this.setState({ isLoading: true })
      console.log(this.state.data)
      const data = {
        name: this.state.name_agents,
      }
      // name ini diambil dri nama postman
      this.props.updateAgents(this.props.match.params.id, data)
      this.props.history.push('/agents')
    }
    this.onChange = (e) => {
      this.setState({
        name_agents: e.currentTarget.value,
      })
    }
  }
  componentDidMount() {
    this.props.getAgentsById(this.props.match.params.id)
    setTimeout(() => {
      this.setState({
        name_agents: this.props.data && this.props.data.name_agents,
      })
    }, 1000)
  }

  render() {
    // const { id, isLoading } = this.state
    return (
      <>
        <NavbarMain />
        <Container>
          {/* {isLoading && <>Loading...</>}
          {
            <>
              <Modal isOpen={this.state.showModal}>
                <ModalHeader>Alert</ModalHeader>
                <ModalBody>{this.state.modalMessage}</ModalBody>
                <ModalFooter>
                  <Button onClick={this.dismissModal}>Ok</Button>
                </ModalFooter>
              </Modal>
            </>
          }
          {id && ( */}
          <>
            <Row>
              <Col md={12}>
                <Form>
                  <FormGroup>
                    <Label>Name Agents</Label>
                    <Input
                      type='text'
                      value={this.state.name_agents}
                      onChange={(e) => this.onChange(e, 'name_agents')}
                    />
                  </FormGroup>
                  <Button onClick={(e) => this.submitData(e)} color='success'>
                    Save
                  </Button>
                </Form>
              </Col>
            </Row>
          </>
          {/* )} */}
        </Container>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.agents.singleData,
  }
}
export default connect(mapStateToProps, { getAgentsById, updateAgents })(
  UpdateAgents
)
