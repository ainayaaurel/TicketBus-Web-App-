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
import EditProfile from './Pages/MyProfile/editprofile'
import ProtectedRoute from './Components/ProtectedRoute'
import HomeAuth from './Pages/HomeAuth'
import './root.css'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div className='content'>
            <Switch>
              <Route
                path='/sign-in'
                render={(props) => <HomeAuth {...props} />}
              />
              {/* <Route
                path='/logout'
                exact
                render={props => <FormLogin {...props} />}
              /> */}
              {/* <ProtectedRoute path='/sign-in' exact component={HomeAuth} /> */}
              <Route path='/dashboard' component={Dashboard} />
              <ProtectedRoute path='/myprofile' component={MyProfil} />
              <ProtectedRoute
                path='/myprofile/edit/:id'
                exact
                component={EditProfile}
              />

              <ProtectedRoute path='/busses' exact component={TableBus} />
              <ProtectedRoute
                path='/busses/edit/:id'
                exact
                component={TabelUpdateBus}
              />
              <ProtectedRoute
                path='/busses/create/'
                component={TabelCreateBus}
              />
              <ProtectedRoute path='/agents' exact component={TableAgents} />
              <ProtectedRoute
                path='/agents/create/'
                exact
                component={TabelCreateAgents}
              />
              <ProtectedRoute
                path='/agents/edit/:id'
                exact
                component={TableUpdateAgents}
              />
              <ProtectedRoute path='/routes' exact component={TableRoutes} />
              <ProtectedRoute
                path='/routes/create/'
                exact
                component={TableCreateRoutes}
              />
              <ProtectedRoute
                path='/routes/create/'
                exact
                component={TableCreateRoutes}
              />
              <ProtectedRoute
                path='/routes/edit/:id/'
                exact
                component={TableUpdateRoutes}
              />
              <ProtectedRoute
                path='/schedules'
                exact
                component={TableSchedules}
              />
              <ProtectedRoute
                path='/schedules/create/'
                exact
                component={TableCreateSchedules}
              />
              <ProtectedRoute
                path='/schedules/edit/:id/'
                exact
                component={TableUpdateSchedules}
              />
              <ProtectedRoute
                path='/biodatauser'
                component={TableBiodataUser}
              />
              <ProtectedRoute component={NotFound} />
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}

export default App
