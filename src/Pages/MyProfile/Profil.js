import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Table,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input,
  FormText,
  Form,
} from 'reactstrap'
import Navbar from '../../Components/Navbar'
import Styled from 'styled-components'
import { connect } from 'react-redux'
import { getMyProfile, updatePicture } from '../../Redux/Actions/MyProfil'
import config from '../../utils/config'

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
      balance: '',
      previewImage: '',
    }
  }
  onChange = (e) => {
    console.log(e.target.files[0], 'potototptotptott')
    this.setState({
      previewImage: URL.createObjectURL(e.target.files[0]),
      picture: e.target.files[0], //khusus files
    })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.updatePicture(this.state.picture)
  }
  componentDidMount() {
    this.props.getMyProfile()
    this.setState({
      previewImage: config.APP_BACKEND.concat(
        `files/${this.props.myprofile && this.props.myprofile.picture}`
      ),
    })
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
                  <CardImg
                    top
                    width='100%'
                    src={this.state.previewImage}
                    alt='Card image cap'
                  />
                  <CardBody>
                    <CardTitle>Name</CardTitle>
                    <Form onSubmit={this.onSubmit}>
                      <FormGroup>
                        <Label for='exampleFile'>File</Label>
                        <Input
                          onChange={this.onChange}
                          type='file'
                          name='file'
                          id='exampleFile'
                        />
                        <FormText color='muted'>
                          This is some placeholder block-level help text for the
                          above input. It's a bit lighter and easily wraps to a
                          new line.
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
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        {this.props.myprofile && this.props.myprofile.name}
                      </td>
                      <td>
                        {this.props.myprofile && this.props.myprofile.gender}
                      </td>
                      <td>
                        {this.props.myprofile && this.props.myprofile.address}
                      </td>
                      <td>
                        {this.props.myprofile && this.props.myprofile.phone}
                      </td>
                      <td>
                        {this.props.myprofile && this.props.myprofile.email}
                      </td>
                      <td>
                        {this.props.myprofile && this.props.myprofile.balance}
                      </td>
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
    myprofile: state.myprofil.usersdetails,
  }
}
export default connect(mapStateToProps, { getMyProfile, updatePicture })(
  MyProfil
)

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
