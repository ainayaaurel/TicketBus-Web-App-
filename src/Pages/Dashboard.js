import React, { Component } from 'react'
import Navbar from '../Components/Navbar'
import { Row, Col, NavItem, Container } from 'reactstrap'
import { Link } from 'react-router-dom'

import Styles from 'styled-components'
import Sidebar from '../Components/Sidebar'
import Card from '../Components/Card'

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
    border-radius : 5px;
    background-color : #fff;
    border : none;
    box-shadow: 1px 1px 4px 1px  #888;
    color : #fff;
    height: 100px;
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
          <Col md={11}>
            <Row>
              <Col md={3}>
                <Card />
              </Col>
              <Col md={3}>
                <Card />
              </Col>
              <Col md={3}>
                <Card />
              </Col>
              <Col md={3}>
                <Card />
              </Col>
            </Row>
            <Container>
              <Row>
                <Col md={12}>
                  <Coloumn></Coloumn>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </>
    )
  }
}

{/* <div className='card-title'>Welcome to SHUTTLEBUS-ID!</div>
              <span>Mau Kemana?</span>
              <span>Yuk, pesan Bus agar Perjalanmu terasa lebih nyaman</span> */}