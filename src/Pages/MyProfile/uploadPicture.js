import React, { Component } from 'react'
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
import config from '../../utils/config'

export default class uploadPicture extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={4}>
            <div>
              <Card>
                <CardImg
                  top
                  width='100%'
                  src={config.APP_BACKEND.concat(
                    `files/${
                      this.props.myprofile && this.props.myprofile.picture
                    }`
                  )}
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
    )
  }
}
