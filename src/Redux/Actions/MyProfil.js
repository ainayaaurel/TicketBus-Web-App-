import axios from 'axios'
import config from '../../utils/config'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token_admin'
)}`

// buat update khusu data
// update profile

export const getMyProfile = () => async (dispatch) => {
  try {
    const res = await axios.get(
      config.APP_BACKEND.concat(`userdetails/myprofile`)
    )
    dispatch({
      type: 'GET_MY_PROFILE',
      payload: res.data.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const updatePicture = (picture) => async (dispatch) => {
  try {
    const data = new FormData()
    data.append('picture', picture)
    console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', picture)
    const res = await axios.put(
      config.APP_BACKEND.concat(`userdetails/updatepicture`),
      data
    )
    dispatch({
      type: 'UPDATE_PICTURE',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
