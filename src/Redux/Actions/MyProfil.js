import axios from 'axios'
import config from '../../utils/config'
import { ActionType } from 'redux-promise-middleware'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token_admin'
)}`

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

export const getAllUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`userdetails/`))
    dispatch({
      type: 'GET_ALL_USERS',
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
      // payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateData = (id, data) => async (dispatch) => {
  try {
    const query = `userdetails`
    const res = await axios.patch(config.APP_BACKEND.concat(query), data)
    if (res) {
      alert('SUCCESS UPDATE')
    } else {
      alert('FAILED TO UPDATE')
    }
    dispatch({
      type: 'UPDATE_DATA',
      payload: res.data.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const movePageUsers = (page) => async (dispatch) => {
  try {
    const query = `userdetails?page=${page}&limit=10`
    console.log(query)
    const res = await axios.get(config.APP_BACKEND.concat(query))
    dispatch({
      type: 'MOVE_PAGE_USERS',
      payload: {
        pageInfo: res.data.pageInfo,
        data: res.data.data,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const searchUser = (name) => async (dispatch) => {
  try {
    const query = `userdetails?search[value]=${name}`
    console.log(query)
    const res = await axios.get(config.APP_BACKEND.concat(query))
    dispatch({
      type: 'SEARCH_DATA_USERS',
      payload: res.data.data,
    })
  } catch (error) {
    console.log(error)
  }
}
