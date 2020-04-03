import React, { Component } from 'react'
import Styles from 'styled-components'
import { Card as SecondCard, Row, Col, CardBody, Container } from 'reactstrap'

const divCard = Styles('div')`
  display: none;
`

const OriCard = Styles('div')`
  background: #fff ;
  box-shadow: 1px 1px 3px 1px  #888;
  border-radius: 20px;
  display: flex;
  justifyContent: flex-between;
  color: grey;
  padding: 20px;
  height: 150px;
  margin-top: 60px;
  & .card-title {
    font-size: 19px;
    margin-top: 20px;
    color: #2F3944;
    margin-left: 20px;
    margin-bottom: 20px; 
    text-align: center; 
  }
`
export default class Card extends Component {
  render() {
    return (
      <Container>
        <divCard>
          <OriCard>
            <CardBody> Total Bus </CardBody>
          </OriCard>
        </divCard>
      </Container>

    )
  }
}

