import React, {Component} from 'react'
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import FormLogin from './Pages/Login'
import Dashboard from './Pages/Dashboard'
import TableBus from './Pages/Busses'
import TableAgents from './Pages/Agents'
import Breadcrumb from './Components/Breadcrumbs'
import { ListGroup, ListGroupItem } from 'reactstrap'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLogin: false
    }
    this.checkLogin = () => {
      if(localStorage.getItem('token')){
        this.setState({isLogin: true})
      } else{
        this.setState({isLogin: false})
      }
    }
  }
  componentDidMount(){
    this.checkLogin
  }
  render() {
    return(
      <React.Fragment> 
        <Router>
        <Breadcrumb/>
        <div className='content'>
          <Switch>
            <Route path='/' exact>
            <ListGroup>
              <ListGroupItem><Link to ='/Transaction'>Transaction</Link></ListGroupItem>
              <ListGroupItem><Link to ='/busses'>Data Bus</Link></ListGroupItem>
              <ListGroupItem><Link to ='/agents'>Data Agents</Link></ListGroupItem>
            </ListGroup>
            </Route>
            <Route path='/login' render={(props)=> <FormLogin {...props} check={()=>this.checkLogin()}  />} exact />
            <Route path='/dashboard' exact render={()=> <Dashboard />} />
            <Route path='/busses' exact render={(props)=><TableBus {...props} />} />
            <Route path='/agents' exact render={(props)=><TableAgents {...props} />} />
          </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App