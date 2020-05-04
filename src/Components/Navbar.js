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
  HeaderSecondsItem,
} from 'reactstrap'
import { Link } from 'react-router-dom'
import { logout } from '../Redux/Actions/Auth'
import { connect } from 'react-redux'
import Styles from 'styled-components'
// import { FaSearch } from 'react-icons/io'

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
    background-color : #39933C !important;
    margin-right: 25px;
    border : none;
    color : #fff !important;
    &&::placeholder {
        color: #fff;
    }
    &&:focus{
        background-color : #fff;
        outline : none !important;
        color: #fff;
    }
`
const NavTop = Styles(NavigationsBar)`
background: #EAFAE9 !important;
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

const NavBarTwo = Styles(NavItem)`
    display : flex;
    justify-content : center;
    align-items : center;
    margin : 0px 10px 0px 10px;
    // background: #D4D4D4 !important
`

class Navbar extends Component {
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
                    color='#39933C'
                    size='37px'
                    title='Notifications'
                  />
                </NavBarTwo>
                <NavBarTwo>
                  <IoIosMail color='#39933C' size='37px' title='Message' />
                </NavBarTwo>
                <NavBarTwo>
                  <Link to='/myprofile'>
                    <IoMdContact
                      color='#39933C'
                      size='37px'
                      title='My Profil'
                    />
                  </Link>
                </NavBarTwo>
                <NavBarTwo>
                  <Link to='/login'>
                    <IoMdLogOut
                      color='#39933C'
                      size='37px'
                      title='LogOut'
                      onClick={this.props.logout}
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

const mapStateToProps = (state) => ({
  logout: state.auth.isLogin,
})
export default connect(mapStateToProps, { logout })(Navbar)
