import React, { Component } from 'react'
import { Row, Col, Form, FormGroup, Label, Input, Button, Container } from 'reactstrap'
import axios from 'axios'
import config from '../../utils/config'
import NavbarMain from '../../Components/NavbarMain'
import { postBus } from '../../Redux/Actions/Busses'
import { connect } from 'react-redux'
import Styled from 'styled-components'

const Bar = Styled('div')`
position: absolute;
top: 100px;
margin-left: 50px;
`

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

  OnSubmit = async e => {
    e.preventDefault()
    const create = {
      name: this.state.name,
      classbus: this.state.class,
      sheets: this.state.sheets,
      price: this.state.price,
      agentsId: this.state.agentsId
    }
    this.props.postBus(create)
    console.log('ini create', create)
    this.props.history.push('/busses')
  }
  changeBus = (e) => {
    this.setState({
      name: e.currentTarget.value
    })
  }
  changeClassBus = (e) => {
    this.setState({
      class: e.currentTarget.value
    })
  }
  changeSheats = e => {
    this.setState({
      sheets: e.currentTarget.value
    })
  }
  changePrice = e => {
    this.setState({
      price: e.currentTarget.value
    })
  }
  changeAgentsId = e => {
    this.setState({
      agentsId: e.currentTarget.value
    })
  }
  render() {
    return (
      <>
        <NavbarMain />
        <Container>
          <Bar>
            <Row>
              <Col md={8}>
                <Form onSubmit={this.OnSubmit}>
                  <FormGroup>
                    <Label>Name Bus</Label>
                    <Input
                      onChange={this.changeBus}
                      type='text'
                      value={this.state.name}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Class Bus</Label>
                    <Input
                      onChange={this.changeClassBus}
                      type='text'
                      value={this.state.class}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Sheats Bus</Label>
                    <Input
                      onChange={this.changeSheats}
                      type='text'
                      value={this.state.sheets}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Price</Label>
                    <Input
                      onChange={this.changePrice}
                      type='text'
                      value={this.state.price}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label>Agents</Label>
                    <Input
                      onChange={this.changeAgentsId}
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
    busses: state.busses.busses
  }
}

export default connect(mapStateToProps, { postBus })(CreateBus)
