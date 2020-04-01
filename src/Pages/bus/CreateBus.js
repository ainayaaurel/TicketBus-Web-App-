import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from 'axios'
import config from '../../utils/config'

class CreateBus extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      name: '',
      class: '',
      sheets: '',
      price: '',
      agentsId: ''
    }
  }

  componentDidMount() {
    axios.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${localStorage.getItem('token_admin')}`
  }

  ketikaDiSubmit = async e => {
    e.preventDefault()
    const create = {
      name: this.state.name,
      classbus: this.state.class,
      sheets: this.state.sheets,
      price: this.state.price,
      agentsId: this.state.agentsId
    }
    console.log('databaru', create)
    const results = await axios.post(
      config.APP_BACKEND.concat(`busses`),
      create
    )
    if (results.data.success) {
      alert('Data Succesfully Create!')
      this.props.history.push('/busses')
      console.log('data terbaru', this.state.data)
    } else {
      alert('Not Succes')
    }
  }
  ketikBus = e => {
    this.setState({
      name: e.currentTarget.value
    })
  }
  ketikClassBus = e => {
    this.setState({
      class: e.currentTarget.value
    })
  }
  ketikSheats = e => {
    this.setState({
      sheets: e.currentTarget.value
    })
  }
  ketikPrice = e => {
    this.setState({
      price: e.currentTarget.value
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
        <Row>
          <Col md={8}>
            <Form onSubmit={this.ketikaDiSubmit}>
              <FormGroup>
                <Label>Name Bus</Label>
                <Input
                  onChange={this.ketikBus}
                  type='text'
                  value={this.state.name}
                />
              </FormGroup>
              <FormGroup>
                <Label>Class Bus</Label>
                <Input
                  onChange={this.ketikClassBus}
                  type='text'
                  value={this.state.class}
                />
              </FormGroup>
              <FormGroup>
                <Label>Sheats Bus</Label>
                <Input
                  onChange={this.ketikSheats}
                  type='text'
                  value={this.state.sheets}
                />
              </FormGroup>
              <FormGroup>
                <Label>Price</Label>
                <Input
                  onChange={this.ketikPrice}
                  type='text'
                  value={this.state.price}
                />
              </FormGroup>
              <FormGroup>
                <Label>Agents</Label>
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
      </>
    )
  }
}

export default CreateBus
