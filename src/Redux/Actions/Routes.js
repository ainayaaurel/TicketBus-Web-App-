import axios from 'axios'
import config from '../../utils/config'
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem('token_admin')}`

export const getRoutes = () => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat('routes'));
    dispatch({
      type: 'GET_ROUTES',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}
export const postRoutes = (create) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('routes'), create);
    dispatch({
      type: 'POST_ROUTES',
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}
export const updateRoutes = (id, data) => async dispatch => {
  try {
    const res = await axios.patch(config.APP_BACKEND.concat(`routes/${id}`), data);
    if (res) {
      alert('SUCCES EDIT')
    } else {
      alert('NOT SUCCESS EDIT ')
    }
    dispatch({
      type: 'UPDATE_ROUTES',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getRoutesById = (id) => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`routes/${id}`));
    dispatch({
      type: 'GET_ROUTES_BY_ID',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}
