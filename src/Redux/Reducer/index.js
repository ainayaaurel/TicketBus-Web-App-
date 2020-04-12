import { combineReducers } from 'redux'
import Busses from './Busses'
import Routes from './Routes'
import Schedules from './Schedules'
import Agents from './Agents'
import Auth from './Auth'
import MyProfil from './MyProfil'
export default combineReducers({
  busses: Busses,
  schedules: Schedules,
  routes: Routes,
  agents: Agents,
  auth: Auth,
  myprofil: MyProfil
})
