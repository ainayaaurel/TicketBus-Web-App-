import axios from 'axios'
import config from '../../utils/config'
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem('token_admin')}`

export const getSchedules = () => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat('schedules'));
    console.log('getschedul', res)
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

export const updateSchedules = (id, data) => async dispatch => {
  try {
    const res = await axios.patch(config.APP_BACKEND.concat(`schedules/${id}`), data);
    if (res) {
      alert('SUCCES EDIT')
    } else {
      alert('NOT SUCCESS EDIT ')
    }
    console.log('dtasche', res)
    dispatch({
      type: 'UPDATE_SCHEDULES',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getSchedulesById = (id) => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`schedules/${id}`));
    dispatch({
      type: 'GET_SCHEDULES_BY_ID',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}