import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import config from '../../utils/config'
import NavbarMain from '../../Components/NavbarMain'
import styled from 'styled-components'

const FormTab = styled(Form)`
  margin-top: 20px;
  margin-left: 220px;
`

class CreateAgents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      name: ''
    }
  }

  componentDidMount() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token_admin')}`
  }

  ketikaDiSubmit = async e => {
    e.preventDefault()
    const create = { name: this.state.name_agents }
    const results = await axios.post(
      config.APP_BACKEND.concat(`agents`),
      create
    )
    console.log('data agent baru', create)
    if (results.data.success) {
      alert('Data Succesfully Create!')
      this.props.history.push('/agents')
      console.log('data agents baru', this.state.data)
    } else {
      alert('Not Succes')
    }
  }
  ketikAgents = e => {
    this.setState({
      name: e.currentTarget.value
    })
  }
  render() {
    return (
      <>
        <NavbarMain />
        <Row>
          <Col md={6}>
            <FormTab onSubmit={this.ketikaDiSubmit}>
              <FormGroup>
                <Label>Name Agents</Label>
                <Input
                  onChange={this.ketikAgents}
                  type='text'
                  value={this.state.name_agents}
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

export default CreateAgents
