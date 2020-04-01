import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import {
  IoIosNotifications,
  IoIosMail,
  IoMdSearch,
  IoMdContact,
  IoMdHome,
  IoIosPeople,
  IoMdBus,
  IoIosHome,
  IoMdCalendar
} from 'react-icons/io'

import { FaRoute, FaWindowRestore } from 'react-icons/fa'
const Side = Styled('ul')`
flex-direction: column!important;
    background-color: #36415B;
    height: 182vh;

`

class Sidebar extends Component {
  render() {
    return (
      <Side className='nav flex-column'>
        <Link
          style={{ marginTop: '20px', marginLeft: '20px', color: 'grey' }}
          to='/dashboard'
          background-color='#282C34'
        >
          <IoIosHome
            color='#fff'
            size='50px'
            title='Dashboard'
            position='center'
          />
        </Link>
        <li className='nav-item'>
          <Link style={{ marginTop: '90px', marginLeft: '20px' }} to='/busses'>
            <IoMdBus color='#fff' size='50px' title='Bus' position='center' />
          </Link>
        </li>
        <li className='nav-item'>
          <Link style={{ marginTop: '90px', marginLeft: '20px' }} to='/agents'>
            <FaWindowRestore
              color='#fff'
              size='45px'
              title='Agents'
              position='center'
            />
          </Link>
        </li>
        <li className='nav-item'>
          <Link
            style={{ marginTop: '90px', marginLeft: '20px' }}
            to='/schedules'
          >
            <IoMdCalendar
              color='#fff'
              size='50px'
              title='Schedules'
              position='center'
            />
          </Link>
        </li>
        <li className='nav-item'>
          <Link style={{ marginTop: '90px', marginLeft: '20px' }} to='/routes'>
            <FaRoute
              color='#fff'
              size='40px'
              title='Routes'
              position='center'
            />
          </Link>
        </li>
        <li className='nav-item'>
          <Link style={{ marginTop: '90px', marginLeft: '20px' }} to='/users'>
            <IoIosPeople
              color='#fff'
              size='50px'
              title='Users'
              position='center'
            />
          </Link>
        </li>
      </Side>
    )
  }
}

export default Sidebar
