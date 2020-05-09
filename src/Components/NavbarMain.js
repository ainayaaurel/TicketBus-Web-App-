import React, { Component } from 'react'
import {
  Navbar as NavigationsBar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Collapse,
  Input,
} from 'reactstrap'
import { Link } from 'react-router-dom'

import Styles from 'styled-components'

import {
  IoIosNotifications,
  IoIosMail,
  IoMdSearch,
  IoMdContact,
  IoMdHome,
  IoMdLogOut,
} from 'react-icons/io'

const Profil = Styles('div')`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    background : #ffff;
`

const Search = Styles(Input)`    
    background-color : rgb(20,89,187);
    margin-right: 25px;
    border : none;
    color : #fff;
    &&::placeholder {
        color: #fff;
    }
    &&:focus{
        background-color : rgb(20,89,187);
        outline : none !important;
        color: #fff;
    }
`
const NavTop = Styles(NavigationsBar)`
background: #EAFAE9  !important;
height: 100px;
color: rgb(22,114,232);
box-shadow: 1px white;

`
const NavBrand = Styles(NavbarBrand)`
display:flex;
justify-content: center;
align-text: center;
color:  #37903B !important;
font-size: 25px;`

const NavBarOne = Styles(NavItem)`
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0px 10px 0px 10px;
`
const NavContainer = Styles(Container)`
widht: 100% !important;
`
const Text = Styles('span')`
color: #399339 !important;
    font-size: 20px;
`
const Wr = Styles('div')`
display: flex;
flex: 1;
`

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavTop color='dark' dark expand='md'>
          <NavContainer>
            <NavBrand>TICKET.BUS</NavBrand>
            <NavbarToggler />
            <Collapse isOpen={true} navbar>
              <Nav className='ml-auto'>
                <NavBarOne>
                  <IoIosNotifications
                    color='#39933C'
                    size='37px'
                    title='Notifications'
                  />
                </NavBarOne>
                <NavBarOne>
                  <IoIosMail color='#39933C' size='37px' title='Message' />
                </NavBarOne>
                <NavBarOne>
                  <Link to={'/myprofile'}>
                    <IoMdContact
                      color='#39933C'
                      size='37px'
                      title='My Profile'
                    />
                  </Link>
                </NavBarOne>
                <NavBarOne>
                  <Link to={'/dashboard'}>
                    <Wr>
                      <IoMdLogOut
                        color='#39933C'
                        size='37px'
                        title='LogOut'
                      ></IoMdLogOut>
                      <Text></Text>
                    </Wr>
                  </Link>
                </NavBarOne>
              </Nav>
            </Collapse>
          </NavContainer>
        </NavTop>
      </div>
    )
  }
}
