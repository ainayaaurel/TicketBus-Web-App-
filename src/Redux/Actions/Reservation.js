import axios from 'axios'
import config from '../../utils/config'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token_admin'
)}`

export const getAllReservation = (query) => async (dispatch) => {
  try {
    query = query || 'reservations/all?&sort[name]=1&limit=5'
    const res = await axios.get(config.APP_BACKEND.concat(query))
    dispatch({
      type: 'GET_ALL_RESERVATIONS',
      payload: {
        pageInfo: res.data.pageInfo,
        data: res.data.data,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
