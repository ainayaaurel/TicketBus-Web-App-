import React, { Component } from 'react'
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  FormText,
} from 'reactstrap'
import DatePicker from 'reactstrap-date-picker'
import TimePicker from 'react-time-picker'
import axios from 'axios'
import config from '../../utils/config'
import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import Styled from 'styled-components'
import { postSchedules } from '../../Redux/Actions/Schedules'
import { getRoutes } from '../../Redux/Actions/Routes'
import { getBus } from '../../Redux/Actions/Busses'
import { getAgents } from '../../Redux/Actions/Agents'
import { connect } from 'react-redux'

const Bar = Styled('div')`
position: absolute;
top: 100px;
margin-left: 50px;
`

class CreateSchedules extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      time: '',
      routesId: '',
      bussesId: '',
      agentsId: '',
      value: new Date().toISOString(),
      formattedValue: '',
    }
  }
  componentDidMount() {
    this.props.getRoutes()
    this.props.getBus()
    this.props.getAgents()
  }
  ketikaDiSubmit = async (e) => {
    e.preventDefault()
    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${localStorage.getItem('token_admin')}`
    const create = {
      date: this.state.formattedValue,
      time: this.state.time,
      routesId: this.state.routesId,
      bussesId: this.state.bussesId,
      agentsId: this.state.agentsId,
    }
    this.props.postSchedules(create)
    console.log('data sche', create)
    // const results = await axios.post(
    //   config.APP_BACKEND.concat(`schedules`),
    //   create
    // )
    // if (results.data.success) {
    //   alert('Data Succesfully Create!')
    this.props.history.push('/schedules')
    //   console.log('data new sche', results)
    // } else {
    //   alert('Not Succes')
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
              <Col md={8}>
                <Form onSubmit={this.ketikaDiSubmit}>
                  <FormGroup>
                    <Label>Date</Label>
                    <DatePicker
                      id='example-datepicker'
                      value={this.state.value}
                      onChange={(v, f) => this.handleChange(v, f)}
                    />
                    <FormText>Help</FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label>Time</Label>
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
          </Bar>
        </Container>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    schedules: state.schedules.schedules,
    routes: state.routes.routes,
    busses: state.busses.busses,
    agents: state.agents.agents,
  }
}
export default connect(mapStateToProps, {
  postSchedules,
  getRoutes,
  getBus,
  getAgents,
})(CreateSchedules)
