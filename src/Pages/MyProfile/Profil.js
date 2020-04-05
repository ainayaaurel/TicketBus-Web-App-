import React, { Component } from 'react';
import { Modal, Button, Table, Container, Row, Col } from 'reactstrap';
import Navbar from '../../Components/Navbar'
import Styled from 'styled-components'

const Tabs = Styled('div')`
position: relative;
width: 100%;
padding-right: 15px;
padding-left: 15px;
margin-top: 40px;
margin-left: 65px;
`
class MyProfil extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      gender: '',
      address: '',
      picture: '',
      phone: '',
      email: '',
      balance: ''
    }
  }
  // componentDidMount() {
  //   this.props.getUsersDetailsById()
  // }

  render() {
    // const { show, onHide } = this.props
    return (
      // <Modal show={show} onHide={onHide}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>My Profile</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>
      <>
        <Navbar />
        <Container>
          <Row>
            <Col md={8}>
              <Tabs>
                <Table bordered>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Address</th>
                      <th>Picture</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                </Table>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </>

      // <Button variant="primary" type="OnChange">
      //   Edit
      //   </Button>
      //   {/* </Modal.Body>
      // </Modal > */}
    )
  }
}

export default MyProfil 