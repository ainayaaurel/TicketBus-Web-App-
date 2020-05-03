import React, { Component } from 'react'
import axios from 'axios'
import config from '../../utils/config'
import Sidebar from '../../Components/Sidebar'
import NavbarMain from '../../Components/NavbarMain'
import { connect } from 'react-redux'
import { getRoutesById, updateRoutes } from '../../Redux/Actions/Routes'

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

class UpdateRoutes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      data: {},
      departure: '',
      arrival: '',
      isLoading: false,
      showModal: false,
      modalMessage: '',
    }
    this.submitData = async (e) => {
      e.preventDefault()
      this.setState({ isLoading: true })
      console.log(this.state.data)
      const data = {
        departure: this.state.departure,
        arrival: this.state.arrival,
      }
      this.props.updateRoutes(this.props.match.params.id, data)
      this.props.history.push('/routes')
    }
    this.ketikDeparture = (e) => {
      this.setState({
        departure: e.currentTarget.value,
      })
    }
    this.ketikArrival = (e) => {
      this.setState({
        arrival: e.currentTarget.value,
      })
    }
  }
  componentDidMount() {
    this.props.getRoutesById(this.props.match.params.id)
    setTimeout(() => {
      this.setState({
        departure: this.props.routes && this.props.routes.departure_at,
        arrival: this.props.routes && this.props.routes.arrival_at,
      })
      console.log(this.props.routes)
    }, 100)
  }
  render() {
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
                      <Label>Departure</Label>
                      <Input
                        type='text'
                        value={this.state.departure}
                        onChange={(e) => this.ketikDeparture(e, 'departure')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Arrival</Label>
                      <Input
                        type='text'
                        value={this.state.arrival}
                        onChange={(e) => this.ketikArrival(e, 'arrival')}
                      />
                    </FormGroup>
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
    routes: state.routes.singleData,
  }
}
export default connect(mapStateToProps, { getRoutesById, updateRoutes })(
  UpdateRoutes
)
