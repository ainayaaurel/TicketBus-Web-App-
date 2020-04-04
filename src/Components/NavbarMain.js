import React, { Component } from 'react'
import {
  Navbar as NavigationsBar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
  Collapse,
  Row,
  Col,
  Input,
  HeaderSecondsItem
} from 'reactstrap'

import Styles from 'styled-components'

import {
  IoIosNotifications,
  IoIosMail,
  IoMdSearch,
  IoMdContact,
  IoMdHome,
  IoMdLogOut
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
background: #42A845 !important;
height: 70px;
color: rgb(22,114,232);
box-shadow: 1px white;

`
const NavBrand = Styles(NavbarBrand)`
display:flex;
justify-content: center;
align-text: center;
`
const NavBarOne = Styles(NavItem)`
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0px 10px 0px 10px;
`
const NavContainer = Styles(Container)`
widht: 100% !important;

`

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavTop color='dark' dark expand='md'>
          <NavContainer>
            <NavBrand>SHUTTLEBUS-ID</NavBrand>
            <NavbarToggler />
            <Collapse isOpen={true} navbar>
              <Nav className='ml-auto'>
                <NavBarOne>
                  <IoIosNotifications
                    color='#fff'
                    size='25px'
                    title='Notifications'
                  />
                </NavBarOne>
                <NavBarOne>
                  <IoIosMail color='#fff' size='30px' title='Message' />
                </NavBarOne>
                <NavBarOne>
                  <IoMdContact color='#fff' size='30px' title='My Profil' />
                </NavBarOne>
                <NavBarOne>
                  {/* <Link to={'/logout'}>
                    <IoMdLogOut
                      color='#fff'
                      size='30px'
                      title='LogOut'
                      color='black'
                    ></IoMdLogOut>
                  </Link> */}
                </NavBarOne>
              </Nav>
            </Collapse>
          </NavContainer>
        </NavTop>
      </div>
    )
  }
}
