import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import {
  IoIosPeople,
  IoMdBus,
  IoIosHome,
  IoMdCalendar
} from 'react-icons/io'

import { FaRoute, FaWindowRestore } from 'react-icons/fa'
const Side = Styled('ul')`
flex-direction: column!important;
    background-color: #4F8B4C;
    height: 80vh;
    border-radius: 0px 8px 8px 0px;

`

class Sidebar extends Component {
  render() {
    return (
      <Side className='nav flex-column justify-content-around '>
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
          <Link style={{ marginTop: '90px', marginLeft: '20px' }} to='/biodatauser'>
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
