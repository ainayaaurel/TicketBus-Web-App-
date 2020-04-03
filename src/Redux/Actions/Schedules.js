import axios from 'axios'
import config from '../../utils/config'
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem('token_admin')}`

export const getSchedules = () => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat('schedules'));
    dispatch({
      type: 'GET_SCHEDULES',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const postSchedules = (create) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('schedules'), create);
    dispatch({
      type: 'POST_SCHEDULES',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}