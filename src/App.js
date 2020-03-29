import React, {Component} from 'react'
import{BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import FormLogin from './Pages/Login'
import TableBus from './Pages/Busses'
import TableAgents from './Pages/Agents'
import TableRoutes from './Pages/Routes'
import TableSchedules from './Pages/Schedules'
import TableBiodataUser from './Pages/Usersdetails'
import TabelUpdateBus from './Pages/UpdateBus'
import Breadcrumb from './Components/Breadcrumbs'
import { ListGroup, ListGroupItem, Row, Col } from 'reactstrap'

class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     isLogin: false
  //   }
  //   this.checkLogin = () => {
  //     if(localStorage.getItem('token')){
  //       this.setState({isLogin: true})
  //     } else{
  //       this.setState({isLogin: false})
  //     }
  //   }
  // }
  // componentDidMount(){
  //   this.checkLogin
  // }
  render() {
    return(
      <React.Fragment> 
        <Router>
        <Breadcrumb/>
        <div className='content'>
          <Switch>
            <Route path='/login' exact render={(props)=> <FormLogin {...props} />} />
            <Route path='/dashboard' exact>
              <Row>
                <Col md={3}>
                <ListGroup>
                  <ListGroupItem><Link to ='/Transaction'>Transaction</Link></ListGroupItem>
                  <ListGroupItem><Link to ='/busses'>Data Bus</Link></ListGroupItem>
                  <ListGroupItem><Link to ='/agents'>Data Agents</Link></ListGroupItem>
                  <ListGroupItem><Link to ='/routes'>Data Routes</Link></ListGroupItem>
                  <ListGroupItem><Link to ='/schedules'>Data Schedules</Link></ListGroupItem>
                  <ListGroupItem><Link to ='/biodatauser'>Data User</Link></ListGroupItem>                
                </ListGroup> 
                </Col>
              </Row>
              
            </Route>
            <Route path='/busses' exact render={(props)=><TableBus {...props} />} />
            <Route path='/busses/edit/:id' exact render={(props)=><TabelUpdateBus {...props} />} />
            <Route path='/agents' exact render={(props)=><TableAgents {...props} />} />
            <Route path='/routes' exact render={(props)=><TableRoutes {...props} />} />
            <Route path='/schedules' exact render={(props)=><TableSchedules {...this.props} />} />
            <Route path='/biodatauser' exact render={(props)=><TableBiodataUser {...this.props} />} />
          </Switch>
          </div>
        </Router>
      </React.Fragment>
    )
  }
}

export default App