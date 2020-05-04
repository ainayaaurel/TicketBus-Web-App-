import React, { Component } from 'react'
import axios from 'axios'
import config from '../../utils/config'
import Sidebar from '../../Components/Sidebar'
import NavbarMain from '../../Components/NavbarMain'
import { connect } from 'react-redux'
import { getRoutes } from '../../Redux/Actions/Routes'
import { getBus } from '../../Redux/Actions/Busses'
import { getAgents } from '../../Redux/Actions/Agents'
import {
  getSchedulesById,
  updateSchedules,
} from '../../Redux/Actions/Schedules'
import DatePicker from 'reactstrap-date-picker'
import TimePicker from 'react-time-picker'
import { FormText } from 'reactstrap'

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

class UpdateSchedules extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      data: {},
      routesId: '',
      agentsId: '',
      bussesId: '',
      value: new Date().toISOString(),
      formattedValue: '',
      isLoading: false,
      showModal: false,
      modalMessage: '',
    }
  }
  componentDidMount() {
    this.props.getSchedulesById(this.props.match.params.id)
    setTimeout(() => {
      this.setState({
        time: this.props.schedules && this.props.schedules.time,
        routesId: this.props.schedules && this.props.schedules.routes_id,
        agentsId: this.props.schedules && this.props.schedules.agents_id,
        bussesId: this.props.schedules && this.props.schedules.busses_id,
      })
    }, 100)
    this.props.getRoutes()
    this.props.getBus()
    this.props.getAgents()
  }

  dismissModal = () => {
    this.setState({ showModal: false })
    this.props.history.push('/schedules')
  }
  onsubmitData = async (e) => {
    e.preventDefault()
    this.setState({ isLoading: true })
    console.log(this.state.data)
    const data = {
      date: this.state.formattedValue,
      time: this.state.time,
      routesId: this.state.routesId,
      bussesId: this.state.bussesId,
      agentsId: this.state.agentsId,
    }
    this.props.updateSchedules(this.props.match.params.id, data)
    this.props.history.push('/schedules')

    // const submit = await axios.patch(
    //   config.APP_BACKEND.concat(`schedules/${this.props.match.params.id}`),
    //   data
    // )
    // console.log('datasadsadasa', this.state.data)
    // if (submit.data.success) {
    //   this.setState({
    //     isLoading: false,
    //     showModal: true,
    //     modalMessage: submit.data.msg
    //   })
    // } else {
    //   this.setState({ modalMessage: submit.data.msg })
    // }
  }
  onChangeTime = (time) => this.setState({ time })

  onChangeRoutesId = (e) => {
    this.setState({
      routesId: e.currentTarget.value,
    })
  }
  onChangeBussesId = (e) => {
    this.setState({
      bussesId: e.currentTarget.value,
    })
  }
  onChangeAgentsId = (e) => {
    this.setState({
      agentsId: e.currentTarget.value,
    })
  }
  handleChange(value, formattedValue) {
    this.setState({
      value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
      formattedValue: formattedValue, // Formatted String, ex: "11/19/2016"
    })
  }
  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    var hiddenInputElement = document.getElementById('example-datepicker')
    console.log(hiddenInputElement.value) // ISO String, ex: "2016-11-19T12:00:00.000Z"
    console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
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
                  <Form onSubmit={this.onsubmitData}>
                    <FormGroup>
                      <Label>Date</Label>
                      <DatePicker
                        id='example-datepicker'
                        value={this.state.value}
                        onChange={(v, f) => this.handleChange(v, f)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Time </Label>
                      <TimePicker
                        onChange={this.onChangeTime}
                        type='text'
                        value={this.state.time}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>RoutesId</Label>

                      <Input
                        type='select'
                        onChange={this.onChangeRoutesId}
                        name='Routes'
                        id='exampleSelect'
                      >
                        {this.props.routes &&
                          this.props.routes.length !== 0 &&
                          this.props.routes.map((v, i) => (
                            <option value={v.id}>
                              {v.departure_at} - {v.arrival_at}
                            </option>
                          ))}
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>BussesId</Label>
                      <Input
                        type='select'
                        onChange={this.onChangeBussesId}
                        name='Busses'
                        id='exampleSelect'
                      >
                        {this.props.busses &&
                          this.props.busses.length !== 0 &&
                          this.props.busses.map((v, i) => (
                            <option value={v.id}>
                              {v.name} - {v.class}
                            </option>
                          ))}
                      </Input>
                    </FormGroup>
                    <FormGroup>
                      <Label>AgentsId</Label>
                      <Input
                        type='select'
                        onChange={this.onChangeAgentsId}
                        name='Agents'
                        id='exampleSelect'
                      >
                        {this.props.agents &&
                          this.props.agents.length !== 0 &&
                          this.props.agents.map((v, i) => (
                            <option value={v.id}>{v.name_agents}</option>
                          ))}
                      </Input>
                    </FormGroup>
                    <Button color='success'>Save</Button>
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
    schedules: state.schedules.singleData,
    routes: state.routes.routes,
    busses: state.busses.busses,
    agents: state.agents.agents,
  }
}
export default connect(mapStateToProps, {
  getSchedulesById,
  updateSchedules,
  getRoutes,
  getBus,
  getAgents,
})(UpdateSchedules)
