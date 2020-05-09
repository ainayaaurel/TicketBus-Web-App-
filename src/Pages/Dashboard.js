import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import { Row, Col, NavItem, Container } from 'reactstrap'
import { getBus } from '../Redux/Actions/Busses'
import { getAgents } from '../Redux/Actions/Agents'
import { getRoutes } from '../Redux/Actions/Routes'
import { getSchedules } from '../Redux/Actions/Schedules'
import { connect } from 'react-redux'
import Styles from 'styled-components'
import Sidebar from '../Components/Sidebar'
import { FaWindowRestore } from 'react-icons/fa'

// const Accent = Styles('div')`
//   background
//   background-color
//   width: 100%;
//   height: 150px;
//   background: #202429;
//   margin-bottom: -100px;
//   padding: 30px;
//   & .title {
//     color: #fff;
//     margin: -20px 0px 0px 0px;
//     font-weight: bold;
//   }
//   & .text {
//     color: #fff;
//   }
// `
const Coloumn = Styles('div')`
    border-radius : 5px;
    background-color : #fff;
    color : black;
    height: 50px;
    margin-top: 40px;
    allign-text: center;
    font-size: 30px;
    font-weight: bold
`
const OriCard = Styles('div')`
  background-color: #42A845;
  display: flex;
  justifyContent: flex-between;
  color: #fff;
  padding: 20px;
  height: 150px;
  margin-top : 30px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
`
const ColoumnBot = Styles('div')`
  background-color: #42A845;
  display: flex;
  justifyContent: flex-between;
  color: #fff;
  padding: 20px;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  text-transform: uppercase;
`

const Total = Styles('div')`
 font-size: 50px;
`
class Dashboard extends Component {
  componentDidMount() {
    this.props.getBus()
    this.props.getAgents()
    this.props.getRoutes()
    this.props.getSchedules()
  }

  render() {
    return (
      <>
        <Navbar />
        <Row>
          <Col md={1} color='dark'>
            <Sidebar />
          </Col>
          <Container>
            <Row>
              <Col md={12}>
                <Coloumn>
                  <h2>WELCOME TO SHUTTLEBUS-ID</h2>
                  <h5>Hey Admin, you can see all the data here!</h5>
                </Coloumn>
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <OriCard>
                  <span> Total Bus </span>
                  <Total>
                    {this.props.pageInfo && this.props.pageInfo.totalData}
                  </Total>
                </OriCard>
              </Col>
              <Col md={3}>
                <OriCard>
                  <span> Total Agents </span>
                  <Total>
                    {this.props.pageInfoAgents &&
                      this.props.pageInfoAgents.totalData}{' '}
                  </Total>
                </OriCard>
              </Col>
              <Col md={3}>
                <OriCard>
                  <span> Total Routes </span>
                  <Total>
                    {this.props.pageInfoRoutes &&
                      this.props.pageInfoRoutes.totalData}
                  </Total>
                </OriCard>
              </Col>
              <Col md={3}>
                <OriCard>
                  <span> Total Schedules </span>
                  <Total>
                    {this.props.pageInfoSchedules &&
                      this.props.pageInfoSchedules.totalData}
                  </Total>
                </OriCard>
              </Col>
            </Row>
          </Container>

          <Container></Container>
          <Container>
            {/* <Row>
              <Col md={12}>
                <div>
                  <li className='nav-item'>
                    <FaWindowRestore
                      color='black'
                      size='20px'
                      title='Agents'
                      position='center'
                    />
                  </li>
                </div>
              </Col>
            </Row> */}
          </Container>
        </Row>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    busses: state.busses.busses,
    pageInfo: state.busses.pageInfo,
    agents: state.agents.agents,
    pageInfoAgents: state.agents.pageInfo,
    routes: state.routes.routes,
    pageInfoRoutes: state.routes.pageInfo,
    schedules: state.schedules.schedules,
    pageInfoSchedules: state.schedules.pageInfo,
  }
}

export default connect(mapStateToProps, {
  getBus,
  getAgents,
  getRoutes,
  getSchedules,
})(Dashboard)

{
  /* <div className='card-title'>Welcome to SHUTTLEBUS-ID!</div>
              <span>Mau Kemana?</span>
              <span>Yuk, pesan Bus agar Perjalanmu terasa lebih nyaman</span> */
}
