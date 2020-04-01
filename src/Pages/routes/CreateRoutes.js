import React, { Component } from 'react'
import {
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container
} from 'reactstrap'
import axios from 'axios'
import config from '../../utils/config'
import NavbarMain from '../../Components/NavbarMain'
import Sidebar from '../../Components/Sidebar'
import Styled from 'styled-components'

const Bar = Styled('div')`
margin-top: -1440px;
margin-left: 50px;
`

class CreateRoutes extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      departure_at: '',
      arrival_at: ''
    }
  }
  ketikaDiSubmit = async e => {
    e.preventDefault()
    const create = {
      departure: this.state.departure_at,
      arrival: this.state.arrival_at
    }
    const results = await axios.post(
      config.APP_BACKEND.concat(`routes`),
      create
    )
    console.log('data departurer', results)
    if (results.data.success) {
      alert('Data Succesfully Create!')
      this.props.history.push('/routes')
    } else {
      alert('Not Succes')
    }
  }
  ketikDeparture = e => {
    this.setState({
      departure_at: e.currentTarget.value
    })
  }
  ketikArival = e => {
    this.setState({
      arrival_at: e.currentTarget.value
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
              <Col md={6}>
                <Form onSubmit={this.ketikaDiSubmit}>
                  <FormGroup>
                    <Label>Departure</Label>
                    <Input
                      onChange={this.ketikDeparture}
                      type='text'
                      value={this.state.departure_at}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Arrival</Label>
                    <Input
                      onChange={this.ketikArival}
                      type='text'
                      value={this.state.arrival_at}
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

export default CreateRoutes
