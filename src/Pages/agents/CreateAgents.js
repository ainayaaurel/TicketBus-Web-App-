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
} from 'reactstrap'
import axios from 'axios'
import config from '../../utils/config'
import NavbarMain from '../../Components/NavbarMain'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { postAgents } from '../../Redux/Actions/Agents'

const FormTab = styled(Form)`
  margin-top: 20px;
  margin-left: 220px;
`

class CreateAgents extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      name_agents: '',
    }
  }

  // componentDidMount() {
  //   axios.defaults.headers.common[
  //     'Authorization'
  //   ] = `Bearer ${localStorage.getItem('token_admin')}`
  // }

  ketikaDiSubmit = async (e) => {
    e.preventDefault()
    const create = { name: this.state.name_agents }
    this.props.postAgents(create)

    // const results = await axios.post(
    //   config.APP_BACKEND.concat(`agents`),
    //   create
    // )
    // console.log('data agent baru', create)
    // if (results.data.success) {
    //   alert('Data Succesfully Create!')
    this.props.history.push('/agents')
    //   console.log('data agents baru', this.state.data)
    // } else {
    //   alert('Not Succes')
    // }
  }
  ketikAgents = (e) => {
    this.setState({
      name_agents: e.currentTarget.value,
    })
  }
  render() {
    return (
      <>
        <NavbarMain />
        <Container>
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
        </Container>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    agents: state.agents.agents,
  }
}

export default connect(mapStateToProps, { postAgents })(CreateAgents)
