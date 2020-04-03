import { combineReducers } from 'redux'
import Busses from './Busses'
import Routes from './Routes'
import Schedules from './Schedules'
import Agents from './Agents'
export default combineReducers({
  busses: Busses,
  schedules: Schedules,
  routes: Routes,
  agents: Agents
})
