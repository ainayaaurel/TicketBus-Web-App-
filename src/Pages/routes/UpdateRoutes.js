import React, { Component } from 'react'
import axios from 'axios'
import config from '../../utils/config'
import Sidebar from '../../Components/Sidebar'
import NavbarMain from '../../Components/NavbarMain'

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

class UpdateRoutes extends Component {
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
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token_admin')}`
    const results = await axios.get(
      config.APP_BACKEND.concat(`routes/${this.props.match.params.id}`)
    )
    const { data } = results.data
    this.setState({ id: this.props.match.params.id, data })
    this.changeData = (e, form) => {
      const { data } = this.state
      data[form] = e.target.value
      this.setState({ data })
    }
    this.submitData = async e => {
      e.preventDefault()
      this.setState({ isLoading: true })
      console.log(this.state.data)
      const data = {
        departure: this.state.data.departure_at,
        arrival: this.state.data.arrival_at
      }
      console.log('ini data baru', data)
      const submit = await axios.patch(
        config.APP_BACKEND.concat(`routes/${this.props.match.params.id}`),
        data
      )
      console.log('datasadsadasa', this.state.data)
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
      this.props.history.push('/routes')
    }
  }
  render() {
    const { id, isLoading } = this.state
    console.log('data', this.state)
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
                <Col style={{ marginTop: '20px' }} md={12} mt={2}>
                  <Form>
                    <FormGroup>
                      <Label>Departure</Label>
                      <Input
                        type='text'
                        value={this.state.data.departure_at}
                        onChange={e => this.changeData(e, 'departure_at')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Arrival</Label>
                      <Input
                        type='text'
                        value={this.state.data.arrival_at}
                        onChange={e => this.changeData(e, 'arrival_at')}
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

export default UpdateRoutes
