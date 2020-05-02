import React, { Component } from 'react'
import axios from 'axios'
import config from '../../utils/config'
import Sidebar from '../../Components/Sidebar'
import NavbarMain from '../../Components/NavbarMain'
import { getBusById, updateBus } from '../../Redux/Actions/Busses'
import { connect } from 'react-redux'

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

class UpdateBus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      name: '',
      class: '',
      sheets: '',
      price: '',
      agents: '',
      isLoading: false,
      showModal: false,
      modalMessage: '',
    }
  }
  // guard untuk kalo data yang sudah terisi
  componentDidMount() {
    console.log('asjdsajdbadsadsadbvshsvd')
    this.props.getBusById(this.props.match.params.id)
    setTimeout(() => {
      this.setState({
        name: this.props.busses && this.props.busses.name,
        class: this.props.busses && this.props.busses.class,
        sheets: this.props.busses && this.props.busses.sheets,
        price: this.props.busses && this.props.busses.price,
      })
    }, 100)
    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${localStorage.getItem('token_admin')}`
    // const results = await axios.get(
    //   config.APP_BACKEND.concat(`busses/${this.props.match.params.id}`)
    // )
    // const { data } = results.data
    // this.setState({ id: this.props.match.params.id, data })
    // this.changeData = (e, form) => {
    //   const { data } = this.state
    //   data[form] = e.target.value
    //   this.setState({ data })
    // }
    this.submitData = async (e) => {
      e.preventDefault()
      this.setState({ isLoading: true })
      console.log(this.state.data)
      const data = {
        name: this.state.name,
        classbus: this.state.class,
        sheets: this.state.sheets,
        price: this.state.price,
      }
      this.props.updateBus(this.props.match.params.id, data)
      console.log('update', updateBus)
      this.props.history.push('/busses')
      // if (this.props.updateBusses) {
      //   console.log('props update', this.props.updateBusses)
      //   this.setState({
      //     isLoading: false,
      //     showModal: true,
      //     // modalMessage: submit.data.msg
      //   })
      // } else {
      //   // this.setState({ modalMessage: submit.data.msg })
      // }
    }
    this.ketikBus = (e) => {
      this.setState({
        name: e.currentTarget.value,
      })
    }
    this.ketikClassBus = (e) => {
      this.setState({
        class: e.currentTarget.value,
      })
    }
    this.ketikSheats = (e) => {
      this.setState({
        sheets: e.currentTarget.value,
      })
    }
    this.ketikPrice = (e) => {
      this.setState({
        price: e.currentTarget.value,
      })
    }
    this.ketikAgentsId = (e) => {
      this.setState({
        agentsId: e.currentTarget.value,
      })
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
          {/* {isLoading && <>Loading...</>} */}
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
          {this.props.match.params.id && (
            <>
              <Row>
                <Col style={{ marginTop: '20px' }} md={12} mt={2}>
                  <Form>
                    <FormGroup>
                      <Label>Name Bus</Label>
                      <Input
                        type='text'
                        value={this.state.name}
                        onChange={(e) => this.ketikBus(e, 'name')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Class Bus</Label>
                      <Input
                        type='text'
                        value={this.state.class}
                        onChange={(e) => this.ketikClassBus(e, 'class')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Sheets Bus</Label>
                      <Input
                        type='text'
                        value={this.state.sheets}
                        onChange={(e) => this.ketikSheats(e, 'sheets')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Price</Label>
                      <Input
                        type='text'
                        value={this.state.price}
                        onChange={(e) => this.ketikPrice(e, 'price')}
                      />
                    </FormGroup>
                    {/* <FormGroup>
                    <Label>Agents</Label>
                    <Input type='text' value={name_agents} onChange={(e) => this.changeData(e, 'name_agents')} />
                  </FormGroup> */}
                    <Button onClick={(e) => this.submitData(e)} color='success'>
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
    busses: state.busses.busses,
  }
}

export default connect(mapStateToProps, { getBusById, updateBus })(UpdateBus)
