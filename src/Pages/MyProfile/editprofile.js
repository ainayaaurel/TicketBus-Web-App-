import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class EditProfile extends Component {
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

  // componentWillReceiveProps({ products }) {
  //   this.onSetValue(products)
    //    console.log(products)
  }

  // onSetValue = (profil) => {
  //   this.setState({
  //     name: products.name,
  //     desc: products.description,
  //     image: products.image,
  //     price: products.price,
  //     category: products.category,
  //     stock: products.stock
  //   }
  //   )
  // }
  onChangeValue = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onChangeImage = (event) => {
    this.setState({
      picture: event.target.files[0]
    })
  }

  onSubmit = async (event) => {
    event.preventDefault()
    this.setState({ isLoading: true })
    console.log(this.state.data)
    const data = {
      name: this.state.name,
      gender: this.state.class,
      address: this.state.sheets,
      picture: this.state.price,
      phone: this.state.phone,
      email: this.state.email,
      balance: this.state.balance
    }
  }

  render() {
    // console.log(this.state.image)
    const { show, onHide} = this.props
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>My Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.onSubmit}>

            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter product name" name="name" value={this.state.name} onChange={this.onChangeValue} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <Form.Control type="text" placeholder="Enter gender" value={this.state.gender} name="gender" onChange={this.onChangeValue} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="file" placeholder="Enter Address" value={this.state.address} name="address" onChange={this.onChangeValue} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Picture</Form.Label>
              <Form.Control type="file" placeholder="Upload Image" name="picture" onChange={this.onChangeImage} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="Enter Price" name="phone" value={this.state.phone} onChange={this.onChangeValue} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Category" name="email" value={this.state.email} onChange={this.onChangeValue} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Balance</Form.Label>
              <Form.Control type="text" placeholder="Enter Balance" name="balance" value={this.state.balance} onChange={this.onChangeValue} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    )
  }
}

export default EditProfile