import React, {Component} from 'react'
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import FormLogin from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import TableBus from './Pages/Busses'
import TableAgents from './Pages/Agents'

class App extends Component {
  render() {
    return(
      <React.Fragment> 
        <Router>
          <Switch>
            <Route path='/login' exact render={()=> <FormLogin />} />
            <Route path='/dashboard' exact render={()=> <Dashboard />} />
            <Route path='/busses' exact render={(props)=><TableBus {...props} />} />
            <Route path='/agents' exact render={(props)=><TableAgents {...props} />} />
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App