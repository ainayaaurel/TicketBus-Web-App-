import React, { Component } from 'react'
import axios from 'axios'
import config from '../../utils/config'
import Sidebar from '../../Components/Sidebar'
import NavbarMain from '../../Components/NavbarMain'
import { connect } from 'react-redux'
import { getSchedulesById, updateSchedules } from '../../Redux/Actions/Schedules'

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
  ModalFooter
} from 'reactstrap'

class UpdateSchedules extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      data: {},
      isLoading: false,
      showModal: false,
      modalMessage: ''
    }
  }
  componentDidMount() {
    console.log('getschedulesbyid')
    this.props.getSchedulesById(this.props.match.params.id)
    setTimeout(() => {
      this.setState({
        time: this.props.schedules && this.props.schedules.time,
        routesId: this.props.schedules && this.props.schedules.routes_id,
        agentsId: this.props.schedules && this.props.schedules.agents_id,
        bussesId: this.props.schedules && this.props.schedules.busses_id

      })
    }, 100);
    // axios.defaults.headers.common[
    //   'Authorization'
    // ] = `Bearer ${localStorage.getItem('token_admin')}`
    // const results = await axios.get(
    //   config.APP_BACKEND.concat(`schedules/${this.props.match.params.id}`)
    // )
    // const { data } = results.data
    // this.setState({ id: this.props.match.params.id, data })
    // this.changeData = (e, form) => {
    //   const { data } = this.state
    //   data[form] = e.target.value
    //   this.setState({ data })
    // }
    this.submitData = async e => {
      e.preventDefault()
      this.setState({ isLoading: true })
      console.log(this.state.data)
      const data = {
        time: this.state.data.time,
        routesId: this.state.data.routes_id,
        agentsId: this.state.data.agents_id,
        bussesId: this.state.data.busses_id
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
    this.ketikTime = e => {
      this.setState({
        time: e.currentTarget.value
      })
    }
    this.ketikRoutes = e => {
      this.setState({
        routesId: e.currentTarget.value
      })
    }
    this.ketikAgents = (e) => {
      this.setState({
        agentsId: e.currentTarget.value
      })
    }
    this.ketikBusses = (e) => {
      this.setState({
        bussesId: e.currentTarget.value
      })
    }
    this.dismissModal = () => {
      this.setState({ showModal: false })
      this.props.history.push('/schedules')
    }
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
                  <Form>
                    <FormGroup>
                      <Label>Time</Label>
                      <Input
                        type='text'
                        value={this.state.time}
                        onChange={e => this.ketikTime(e, 'time')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Routes_Id</Label>
                      <Input
                        type='text'
                        value={this.state.routesId}
                        onChange={e => this.ketikRoutes(e, 'routes_id')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Agents_Id</Label>
                      <Input
                        type='text'
                        value={this.state.agentsId}
                        onChange={e => this.ketikAgents(e, 'agents_id')}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label>Busses_Id</Label>
                      <Input
                        type='text'
                        value={this.state.bussesId}
                        onChange={e => this.ketikBusses(e, 'busses_id')}
                      />
                    </FormGroup>
                    <Button onClick={e => this.submitData(e)} color='success'>
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
    schedules: state.schedules.singleData
  }
}
export default connect(mapStateToProps, { getSchedulesById, updateSchedules })(UpdateSchedules)
