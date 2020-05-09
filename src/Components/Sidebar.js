import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import { IoIosPeople, IoMdBus, IoIosHome, IoMdCalendar } from 'react-icons/io'

import { FaRoute, FaWindowRestore } from 'react-icons/fa'

const Side = Styled('ul')`

flex-direction: column!important;

    background-color: #1C5D3B !important;
    height: 100vh;
    width: 30vh;
    overflowX: 'visible' !important,
    border-radius: 0px 0px 0px 0px;

`
const Text = Styled('span')`
color: #fff;
font-size: 20px;
margin: 5px ;

`
const Wr = Styled('div')`
background-color : 'red';
display: flex;
flex: 1;
padding-left: 20px;
`

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Side className='nav flex-column pt-4 '>
          <li className='nav-item'>
            <Link
              style={{ marginTop: '90px' }}
              to='/dashboard'
              background-color='#282C34'
            >
              <Wr>
                <IoIosHome
                  color='#fff'
                  size='30px'
                  title='Dashboard'
                  position='center'
                />
                <Text>Home</Text>
              </Wr>
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              style={{ marginTop: '20px', marginLeft: '20px' }}
              to='/busses'
            >
              <Wr>
                <IoMdBus
                  color='#fff'
                  size='30px'
                  title='Bus'
                  position='center'
                />
                <Text>Data Bus</Text>
              </Wr>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ marginTop: '60px', marginLeft: '20px' }}
              to='/agents'
            >
              <Wr>
                <FaWindowRestore
                  color='#fff'
                  size='30px'
                  title='Agents'
                  position='center'
                />
                <Text>Data Agents</Text>
              </Wr>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ marginTop: '60px', marginLeft: '20px' }}
              to='/schedules'
            >
              <Wr>
                <IoMdCalendar
                  color='#fff'
                  size='30px'
                  title='Schedules'
                  position='center'
                />
                <Text>Schedules</Text>
              </Wr>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ marginTop: '20px', marginLeft: '20px' }}
              to='/routes'
            >
              <Wr>
                <FaRoute
                  color='#fff'
                  size='30px'
                  title='Routes'
                  position='center'
                />
                <Text>List Routes</Text>
              </Wr>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ marginTop: '20px', marginLeft: '20px' }}
              to='/biodatauser'
            >
              <Wr>
                <IoIosPeople
                  color='#fff'
                  size='30px'
                  title='Users'
                  position='center'
                />
                <Text>Data User</Text>
              </Wr>
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              style={{ marginTop: '20px', marginLeft: '20px' }}
              to='/reservations'
            >
              <Wr>
                <IoIosPeople
                  color='#fff'
                  size='30px'
                  title='Users'
                  position='center'
                />
                <Text>Data Reservation</Text>
              </Wr>
            </Link>
          </li>
        </Side>
      </div>
    )
  }
}

export default Sidebar
