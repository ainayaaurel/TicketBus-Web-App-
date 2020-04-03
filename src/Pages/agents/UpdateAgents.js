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
  ModalFooter
} from 'reactstrap'

import NavbarMain from '../../Components/NavbarMain'

class UpdateAgents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      data: {},
      isLoading: false,
      showModal: false,
      modalMessage: ''
    }
  }
  async componentDidMount() {
    this.props.getAgentsById(this.props.match.params.id)
    setTimeout(() => {
      this.setState({
        name: this.props.routes.name,
        class: this.props.routes && this.props.routes.class,
        sheets: this.props.routes && this.props.routes.sheets,
        price: this.props.routes && this.props.routes.price

      })
    }, 100);
    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${localStorage.getItem('token_admin')}`
    // const results = await axios.get(
    //   config.APP_BACKEND.concat(`agents/${this.props.match.params.id}`)
    // )
    // const { data } = results.data
    // this.setState({ id: this.props.match.params.id, data })
    // this.changeData = (e, form) => {
    //   const { data } = this.state
    //   data[form] = e.target.value
    //   this.setState({ data })
    // }
    this.submitData = async e => {
      e.preventDefault()
      this.setState({ isLoading: true })
      console.log(this.state.data)
      const submit = await axios.patch(
        config.APP_BACKEND.concat(`agents/${this.props.match.params.id}`)
      )
      console.log('data', submit)
      if (submit.data.success) {
        this.setState({
          isLoading: false,
          showModal: true,
          modalMessage: submit.data.msg
        })
      } else {
        this.setState({ modalMessage: submit.data.msg })
      }
    }
    this.dismissModal = () => {
      this.setState({ showModal: false })
      this.props.history.push('/agents')
    }
  }
  render() {
    const { id, isLoading } = this.state
    const { name } = this.state.data
    return (
      <>
        <NavbarMain />
        <Container>
          {isLoading && <>Loading...</>}
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
          {id && !isLoading && (
            <>
              <Row>
                <Col md={12}>
                  <Form>
                    <FormGroup>
                      <Label>Name Agents</Label>
                      <Input
                        type='text'
                        value={name}
                        onChange={e => this.changeData(e, 'name_agents')}
                      />
                    </FormGroup>
                    <Button onClick={e => this.submitData(e)} color='success'>
                      Save
                    </Button>
                  </Form>
                </Col>
              </Row>
            </>
          )}
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
export default connect(mapStateToProps, { getAgentsById, updateAgents })(UpdateAgents)
