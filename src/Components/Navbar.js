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

import { Link } from 'react-router-dom'

import Styles from 'styled-components'
// import { FaSearch } from 'react-icons/io'

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
    background-color : #fff !important;
    margin-right: 25px;
    border : none;
    color : #fff !important;
    &&::placeholder {
        color: #202429;
    }
    &&:focus{
        background-color : #fff;
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
const NavBarTwo = Styles(NavItem)`
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0px 10px 0px 10px;
    backgroun: #D4D4D4 !important
`

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <NavTop color='yellow' dark expand='md'>
          <Container>
            <NavBrand>SHUTTLEBUS-ID</NavBrand>
            <NavbarToggler />
            <Collapse isOpen={true} navbar>
              <Nav className='ml-auto'>
                <NavBarTwo>
                  <Search type='text' placeholder='Search...' />
                </NavBarTwo>
                <NavBarTwo>
                  <IoIosNotifications
                    color='#fff'
                    size='25px'
                    title='Notifications'
                  />
                </NavBarTwo>
                <NavBarTwo>
                  <IoIosMail color='#fff' size='30px' title='Message' />
                </NavBarTwo>
                <NavBarTwo>
                  <Link to='/myprofile'
                  >
                    <IoMdContact color='#fff' size='30px' title='My Profil' />
                  </Link>

                </NavBarTwo>
                <NavBarTwo>
                  <Link to='/login'>
                    <IoMdLogOut
                      color='#fff'
                      size='30px'
                      title='LogOut'
                      color='black'
                    />
                  </Link>
                </NavBarTwo>
              </Nav>
            </Collapse>
          </Container>
        </NavTop>
      </div>
    )
  }
}
