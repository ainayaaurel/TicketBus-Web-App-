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

class UpdateBus extends Component {
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
      config.APP_BACKEND.concat(`busses/${this.props.match.params.id}`)
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
        name: this.state.data.name,
        classbus: this.state.data.class,
        sheets: this.state.data.sheets,
        price: this.state.data.price
      }
      console.log('ini data baru', data)
      const submit = await axios.patch(
        config.APP_BACKEND.concat(`busses/${this.props.match.params.id}`),
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
      this.props.history.push('/busses')
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
                      <Label>Name Bus</Label>
                      <Input
                        type='text'
                        value={this.state.data.name}
                        onChange={e => this.changeData(e, 'name')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Class Bus</Label>
                      <Input
                        type='text'
                        value={this.state.data.class}
                        onChange={e => this.changeData(e, 'class')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Sheets Bus</Label>
                      <Input
                        type='text'
                        value={this.state.data.sheets}
                        onChange={e => this.changeData(e, 'sheets')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Price</Label>
                      <Input
                        type='text'
                        value={this.state.data.price}
                        onChange={e => this.changeData(e, 'price')}
                      />
                    </FormGroup>
                    {/* <FormGroup>
                    <Label>Agents</Label>
                    <Input type='text' value={name_agents} onChange={(e) => this.changeData(e, 'name_agents')} />
                  </FormGroup> */}
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

export default UpdateBus
