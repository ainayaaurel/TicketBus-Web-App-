import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FormLogin from './Pages/Login'
import TableBus from './Pages/bus/Busses'
import TableAgents from './Pages/agents/Agents'
import TableRoutes from './Pages/routes/Routes'
import TableSchedules from './Pages/schedules/Schedules'
import TableBiodataUser from './Pages/Users/Usersdetails'
import TabelUpdateBus from './Pages/bus/UpdateBus'
import TableUpdateAgents from './Pages/agents/UpdateAgents'
import Dashboard from './Pages/Dashboard'
import TabelCreateBus from './Pages/bus/CreateBus'
import TabelCreateAgents from './Pages/agents/CreateAgents'
import TableCreateRoutes from './Pages/routes/CreateRoutes'
import TableCreateSchedules from './Pages/schedules/CreateSchedules'
import TableUpdateSchedules from './Pages/schedules/UpdateSchedules'
import TableUpdateRoutes from './Pages/routes/UpdateRoutes'
import NotFound from './Components/NotFound'
import MyProfil from './Pages/MyProfile/Profil'
import ProtectedRoute from './Components/ProtectedRoute'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className='content'>
            <Switch>
              <Route
                path='/'
                exact
                render={(props) => <FormLogin {...props} />}
              />
              {/* <Route
                path='/logout'
                exact
                render={props => <FormLogin {...props} />}
              /> */}
              <Route
                path='/myprofile'
                exact
                render={(props) => <MyProfil {...props} />}
              />
              <ProtectedRoute path='/dashboard' exact component={Dashboard} />

              <ProtectedRoute path='/busses' exact component={TableBus} />
              <ProtectedRoute
                path='/busses/edit/:id'
                exact
                component={TabelUpdateBus}
              />
              <ProtectedRoute
                path='/busses/create/'
                exact
                component={TabelCreateBus}
              />
              <ProtectedRoute path='/agents' exact component={TableAgents} />
              <ProtectedRoute
                path='/agents/create/'
                exact
                component={TabelCreateAgents}
              />
              <ProtectedRoute
                path='/busses/edit/:id'
                exact
                component={TabelUpdateBus}
              />
              <ProtectedRoute
                path='/busses/edit/:id'
                exact
                component={TabelUpdateBus}
              />
              <ProtectedRoute
                path='/busses/edit/:id'
                exact
                component={TabelUpdateBus}
              />

              <Route
                path='/agents/edit/:id'
                exact
                render={(props) => <TableUpdateAgents {...props} />}
              />
              <Route
                path='/routes'
                exact
                render={(props) => <TableRoutes {...props} />}
              />
              <Route
                path='/routes/create/'
                exact
                render={(props) => <TableCreateRoutes {...props} />}
              />
              <Route
                path='/routes/edit/:id/'
                exact
                render={(props) => <TableUpdateRoutes {...props} />}
              />
              <Route
                path='/schedules'
                exact
                render={(props) => <TableSchedules {...props} />}
              />
              <Route
                path='/schedules/create/'
                exact
                render={(props) => <TableCreateSchedules {...props} />}
              />
              <Route
                path='/schedules/edit/:id/'
                exact
                render={(props) => <TableUpdateSchedules {...props} />}
              />
              <Route
                path='/biodatauser'
                exact
                render={(props) => <TableBiodataUser {...props} />}
              />
              <Route render={(props) => <NotFound />} />
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}

export default App
