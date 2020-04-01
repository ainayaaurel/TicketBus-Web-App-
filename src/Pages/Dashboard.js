import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import { Row, Col, Card, Nav, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'

import Styles from 'styled-components'
import Sidebar from '../Components/Sidebar'

const StatusCard = Styles(Card)`
  background-color: #white;
  color: grey;
  padding: 20px;
  height: 700px;
  & .card-title {
    font-size: 19px;
    margin-top: 20px;
    color: #2F3944;
    margin-left: 20px;
    margin-bottom: 20px; 
    text-align: center;
    
  }
`
const Accent = Styles('div')`
  background
  background-color
  width: 100%;
  height: 150px;
  background: #202429;
  margin-bottom: -120px;
  padding: 30px;
  & .title {
    color: #fff;
    margin: -20px 0px 0px 0px;
    font-weight: bold;
  }
  & .text {
    color: #fff;
  }
`
const Coloumn = Styles(NavItem)`
    border-radius : 80px;
    background-color : #1459BB;
    border : none;
    color : #fff;
    height: 50px;
    margin: 5px 42px 8px -9px;
    & .Link {
      color: #fff;
    }
`

export default class Dashboard extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Accent></Accent>
        <Row>
          <Col md={1} color='dark'>
            <Sidebar />
          </Col>
          <Col md={9}>
            <StatusCard>
              <div className='card-title'>Welcome to SHUTTLEBUS-ID!</div>
              <span>Mau Kemana?</span>
              <span>Yuk, pesan Bus agar Perjalanmu terasa lebih nyaman</span>
            </StatusCard>
          </Col>
        </Row>
      </>
    )
  }
}
