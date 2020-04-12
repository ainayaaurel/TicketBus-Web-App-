import React, { Component } from 'react';
import {
  Button, Table, Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, FormGroup, Label, Input, FormText, Form
} from 'reactstrap';
import Navbar from '../../Components/Navbar'
import Styled from 'styled-components'
import { connect } from 'react-redux'
import { getMyProfile, updateMyProfile } from '../../Redux/Actions/MyProfil'
import config from '../../utils/config';


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
  onChange = (e) => {
    this.setState({
      picture: e.target.files[0] //khusus files
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.updateMyProfile(this.state.picture)

  }
  componentDidMount() {
    this.props.getMyProfile()
  }

  render() {
    return (
      <>
        <Navbar />
        <Container>
          <Row>
            <Col md={4}>
              <div>
                <Card>
                  <CardImg top width="100%" src={config.APP_BACKEND.concat(`files/${this.props.myprofile && this.props.myprofile.picture}`)} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>Name</CardTitle>
                    <Form onSubmit={this.onSubmit}>
                      <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input onChange={this.onChange} type="file" name="file" id="exampleFile" />
                        <FormText color="muted">
                          This is some placeholder block-level help text for the above input.
                          It's a bit lighter and easily wraps to a new line.
                      </FormText>
                      </FormGroup>
                      <Button>Edit</Button>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
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
                  <tbody>
                    <tr>
                      <td>{this.props.myprofile && this.props.myprofile.name}</td>
                      <td>{this.props.myprofile && this.props.myprofile.gender}</td>
                      <td>{this.props.myprofile && this.props.myprofile.address}</td>
                      <td>{this.props.myprofile && this.props.myprofile.picture}</td>
                      <td>{this.props.myprofile && this.props.myprofile.phone}</td>
                      <td>{this.props.myprofile && this.props.myprofile.email}</td>
                      <td>{this.props.myprofile && this.props.myprofile.balance}</td>
                    </tr>
                  </tbody>
                </Table>
              </Tabs>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    myprofile: state.myprofil.usersdetails
  }
}
export default connect(mapStateToProps, { getMyProfile, updateMyProfile })(MyProfil)


// const { show, onHide } = this.props

// <Modal show={show} onHide={onHide}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>My Profile</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body>

      // <Button variant="primary" type="OnChange">
      //   Edit
      //   </Button>
      //   {/* </Modal.Body>
      // </Modal > */}