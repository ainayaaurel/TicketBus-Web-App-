import React, { Component } from 'react';
import '../styles/dashboard.css'

class Dashboard extends Component{


  componentDidMount(){
    console.log('asdsa')
    localStorage.setItem('nama','asncjddncjdn') // untuk authentication nti muncul di
  }
  render(){
    
    return(
      <>
      <div className="dashboard">
        <div className="sidebar">
          <div className="logo">
            <h1>SHUTTLEBUS-ID</h1>
            <button type="button"> <i class="fas fa-bars"></i> </button>
          </div>
          <div className="profil">
            <h2>My Profil</h2>
            <button type="button"><i class="fas fa-user-circle"></i> </button>
          </div>
          <div className="navigation"></div>
        </div>
      </div>
      </>

    )
  }
}

export default Dashboard
