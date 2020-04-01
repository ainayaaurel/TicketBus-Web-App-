import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import config from '../../utils/config'
import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import styled from 'styled-components'

const FormTab = styled(Form)`
  margin-top: -1440px;
  margin-left: 220px;
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
  componentDidMount() {}
  ketikaDiSubmit = async e => {
    e.preventDefault()
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token_admin')}`
    const create = {
      time: this.state.time,
      routesId: this.state.routesId,
      bussesId: this.state.bussesId,
      agentsId: this.state.agentsId
    }
    console.log('data sche', create)
    const results = await axios.post(
      config.APP_BACKEND.concat(`schedules`),
      create
    )
    if (results.data.success) {
      alert('Data Succesfully Create!')
      this.props.history.push('/schedules')
      console.log('data new sche', results)
    } else {
      alert('Not Succes')
    }
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
        <Row>
          <Col md={8}>
            <FormTab onSubmit={this.ketikaDiSubmit}>
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
            </FormTab>
          </Col>
        </Row>
      </>
    )
  }
}
export default CreateSchedules
