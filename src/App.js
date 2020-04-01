import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FormLogin from './Pages/Login'
import TableBus from './Pages/bus/Busses'
import TableAgents from './Pages/agents/Agents'
import TableRoutes from './Pages/routes/Routes'
import TableSchedules from './Pages/schedules/Schedules'
import TableBiodataUser from './Pages/Usersdetails'
import TabelUpdateBus from './Pages/bus/UpdateBus'
import TableUpdateAgents from './Pages/agents/UpdateAgents'
import Dashboard from './Pages/Dashboard'
import Breadcrumb from './Components/Breadcrumbs'

import TabelCreateBus from './Pages/bus/CreateBus'
import TabelCreateAgents from './Pages/agents/CreateAgents'
import TableCreateRoutes from './Pages/routes/CreateRoutes'
import TableCreateSchedules from './Pages/schedules/CreateSchedules'
import TableUpdateSchedules from './Pages/schedules/UpdateSchedules'
import TableUpdateRoutes from './Pages/routes/UpdateRoutes'
import Navbar from './Components/Navbar'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className='content'>
            <Switch>
              <Route
                path='/login'
                exact
                render={props => <FormLogin {...props} />}
              />
              <Route
                path='/dashboard'
                exact
                render={props => <Dashboard {...props} />}
              />

              <Route
                path='/busses'
                exact
                render={props => <TableBus {...props} />}
              />
              <Route
                path='/busses/edit/:id'
                exact
                render={props => <TabelUpdateBus {...props} />}
              />
              <Route
                path='/busses/create/'
                exact
                render={props => <TabelCreateBus {...props} />}
              />
              <Route
                path='/agents'
                exact
                render={props => <TableAgents {...props} />}
              />
              <Route
                path='/agents/create/'
                exact
                render={props => <TabelCreateAgents {...props} />}
              />
              <Route
                path='/agents/edit/:id'
                exact
                render={props => <TableUpdateAgents {...props} />}
              />
              <Route
                path='/routes'
                exact
                render={props => <TableRoutes {...props} />}
              />
              <Route
                path='/routes/create/'
                exact
                render={props => <TableCreateRoutes {...props} />}
              />
              <Route
                path='/routes/edit/:id/'
                exact
                render={props => <TableUpdateRoutes {...props} />}
              />
              <Route
                path='/schedules'
                exact
                render={props => <TableSchedules {...props} />}
              />
              <Route
                path='/schedules/create/'
                exact
                render={props => <TableCreateSchedules {...props} />}
              />
              <Route
                path='/schedules/edit/:id/'
                exact
                render={props => <TableUpdateSchedules {...props} />}
              />
              <Route
                path='/biodatauser'
                exact
                render={props => <TableBiodataUser {...props} />}
              />
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}

export default App
