import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import axios from 'axios'
import config from '../../utils/config'
import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import Styled from 'styled-components'
import { postSchedules } from '../../Redux/Actions/Schedules'
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
      agentsId: ''
    }
  }
  componentDidMount() { }
  ketikaDiSubmit = async e => {
    e.preventDefault()
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token_admin')}`
    const create = {
      time: this.state.data.time,
      routesId: this.state.data.routesId,
      bussesId: this.state.data.bussesId,
      agentsId: this.state.data.agentsId
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
  ketikTime = e => {
    this.setState({
      time: e.currentTarget.value
    })
  }
  ketikRoutesId = e => {
    this.setState({
      routesId: e.currentTarget.value
    })
  }
  ketikBussesId = e => {
    this.setState({
      bussesId: e.currentTarget.value
    })
  }
  ketikAgentsId = e => {
    this.setState({
      agentsId: e.currentTarget.value
    })
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
                    <Label>Time</Label>
                    <Input
                      onChange={this.ketikTime}
                      type='text'
                      value={this.state.time}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>RoutesId</Label>
                    <Input
                      onChange={this.ketikRoutesId}
                      type='text'
                      value={this.state.routesId}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>BussesId</Label>
                    <Input
                      onChange={this.ketikBussesId}
                      type='text'
                      value={this.state.bussesId}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>AgentsId</Label>
                    <Input
                      onChange={this.ketikAgentsId}
                      type='text'
                      value={this.state.agentsId}
                    />
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
    schedules: state.schedules.schedules
  }
}
export default connect(mapStateToProps, { postSchedules })(CreateSchedules)
