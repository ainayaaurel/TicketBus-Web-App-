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
  ModalHeader,
  Modal,
  ModalBody,
  ModalFooter,
} from 'reactstrap'
import Navbar from '../../Components/Navbar'
import Styled from 'styled-components'
import { connect } from 'react-redux'
import {
  getMyProfile,
  updatePicture,
  updateData,
} from '../../Redux/Actions/MyProfil'
import config from '../../utils/config'
import { FiEdit } from 'react-icons/fi'

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
      isLoading: false,
      showModalPicture: false,
      showModalData: false,
    }
  }
  onChange = (e) => {
    console.log(e.target.files[0], 'potototptotptott')
    this.setState({
      previewImage: URL.createObjectURL(e.target.files[0]),
      picture: e.target.files[0], //khusus files
    })
  }
  onChangeName = (e) => {
    this.setState({
      name: e.currentTarget.value,
    })
  }

  onChangeAddress = (e) => {
    this.setState({
      address: e.currentTarget.value,
    })
  }

  onChangePhone = (e) => {
    this.setState({
      phone: e.currentTarget.value,
    })
  }

  onChangeEmail = (e) => {
    this.setState({
      email: e.currentTarget.value,
    })
  }

  onSubmitData = async (e) => {
    e.preventDefault()

    console.log(this.state.data)
    const data = {
      name: this.state.name,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
    }
    this.props.updateData(this.props.match.params.id, data)
    this.props.getMyProfile()
    this.setState({ isLoading: true, showModalData: false })
  }
  onSubmit = (e) => {
    e.preventDefault()
    this.props.updatePicture(this.state.picture)
    this.props.getMyProfile()
    this.setState({
      previewImage: config.APP_BACKEND.concat(
        `files/${this.props.myprofile && this.props.myprofile.picture}`
      ),
      showModalPicture: false,
    })
  }
  componentDidMount() {
    this.props.getMyProfile()
    this.setState({
      name: this.props.myprofile && this.props.myprofile.name,
      address: this.props.myprofile && this.props.myprofile.address,
      phone: this.props.myprofile && this.props.myprofile.phone,
      email: this.props.myprofile && this.props.myprofile.email,
      previewImage: config.APP_BACKEND.concat(
        `files/${this.props.myprofile && this.props.myprofile.picture}`
      ),
    })
    document.title = 'My Profile'
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
                    <CardTitle> My Profile </CardTitle>
                    <Form onSubmit={this.onSubmit}>
                      <Button
                        onClick={() =>
                          this.setState({
                            showModalPicture: true,
                          })
                        }
                      >
                        Update Picture
                      </Button>
                    </Form>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.showModalPicture}>
          <ModalHeader>Update Picture</ModalHeader>
          <ModalBody>
            <Card>
              <CardImg
                top
                width='100%'
                src={this.state.previewImage}
                alt='Card image cap'
              />
              <CardBody>
                <CardTitle>My Profile</CardTitle>
                <Form onSubmit={this.onSubmit}>
                  <FormGroup>
                    <Label for='exampleFile'>File</Label>
                    <Input
                      onChange={this.onChange}
                      type='file'
                      name='file'
                      id='exampleFile'
                    />
                  </FormGroup>
                  <Button>Update Picture</Button>
                </Form>
              </CardBody>
            </Card>
            <Button
              color='danger'
              onClick={() => this.setState({ showModalPicture: false })}
            >
              Cancel
            </Button>
          </ModalBody>
        </Modal>
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
                      <th>Actions</th>
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
                      <td>
                        <FiEdit
                          color='black'
                          size='25px'
                          title='EDIT'
                          position='center'
                          onClick={() =>
                            this.setState({
                              showModalData: true,
                            })
                          }
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tabs>
            </Col>
          </Row>
        </Container>
        <Modal isOpen={this.state.showModalData}>
          <ModalHeader>Update Profile</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmitData}>
              <FormGroup>
                <Label for='name'>Name</Label>
                <Input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='enter your new name'
                  onChange={(e) => this.onChangeName(e, 'name')}
                  value={this.state.name}
                />
              </FormGroup>
              <FormGroup>
                <Label for='address'>Address</Label>
                <Input
                  type='text'
                  name='address'
                  id='address'
                  placeholder='enter your new address'
                  onChange={(e) => this.onChangeAddress(e, 'address')}
                  value={this.state.address}
                />
              </FormGroup>
              <FormGroup>
                <Label for='phone'>Phone</Label>
                <Input
                  type='text'
                  name='phone'
                  id='phone'
                  placeholder='enter your new phone'
                  onChange={(e) => this.onChangePhone(e, 'phone')}
                  value={this.state.phone}
                />
              </FormGroup>
              <FormGroup>
                <Label for='email'>Email</Label>
                <Input
                  type='text'
                  name='email'
                  id='email'
                  placeholder='enter your new email'
                  onChange={(e) => this.onChangeEmail(e, 'email')}
                  value={this.state.email}
                />
              </FormGroup>
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
                    </FormGroup>
                  </Form>
                </CardBody>
              </Card>
              <Button color='success'>Update</Button>
              <Button
                color='danger'
                onClick={() => this.setState({ showModalData: false })}
              >
                Cancel
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    myprofile: state.myprofil.usersdetails,
    update: state.myprofil.singleData,
  }
}
export default connect(mapStateToProps, {
  getMyProfile,
  updatePicture,
  updateData,
})(MyProfil)
