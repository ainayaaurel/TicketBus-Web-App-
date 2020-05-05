import axios from 'axios'
import config from '../../utils/config'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(
  'token_admin'
)}`

export const getSchedules = () => async (dispatch) => {
  try {
    const res = await axios.get(
      config.APP_BACKEND.concat(
        'schedules/?date=2020-05-01&sortBy=schedules.time&sort=0'
      )
    )
    console.log('getschedul', res)
    dispatch({
      type: 'GET_SCHEDULES',
      payload: {
        pageInfo: res.data.pageInfo,
        data: res.data.data,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const postSchedules = (create) => async (dispatch) => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('schedules'), create)
    dispatch({
      type: 'POST_SCHEDULES',
      payload: res.data.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateSchedules = (id, data) => async (dispatch) => {
  try {
    const res = await axios.patch(
      config.APP_BACKEND.concat(`schedules/${id}`),
      data
    )
    if (res) {
      alert('SUCCES EDIT')
    } else {
      alert('NOT SUCCESS EDIT ')
    }
    console.log('dtasche', res)
    dispatch({
      type: 'UPDATE_SCHEDULES',
      payload: res.data.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getSchedulesById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`schedules/${id}`))
    dispatch({
      type: 'GET_SCHEDULES_BY_ID',
      payload: res.data.data,
    })
  } catch (error) {
    console.log(error)
  }
}
export const searchDataSchedules = (departure) => async (dispatch) => {
  try {
    const query = `schedules?search[value]=${departure}`
    console.log(query)
    const res = await axios.get(config.APP_BACKEND.concat(query))
    dispatch({
      type: 'SEARCH_DATA_SCHEDULES',
      payload: res.data.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const sortByTime = (time, query2) => async (dispatch) => {
  const query = `schedules/?date=2020-05-01&sort[value]=0&sortBy=schedules.${time}`
  const res = await axios.get(
    config.APP_BACKEND.concat(query2 ? query2 : query)
  )
  dispatch({
    type: 'SORT_BY_TIME_SCHEDULES',
    payload: res.data.data,
  })
}

export const movePageSchedules = (page) => async (dispatch) => {
  try {
    const query = `schedules/?date=2020-05-01&sort[value]=0&sortBy=schedules.time&limit=10&page=${page}`
    console.log(query)
    const res = await axios.get(config.APP_BACKEND.concat(query))
    dispatch({
      type: 'MOVE_PAGE_SCHEDULES',
      payload: {
        pageInfo: res.data.pageInfo,
        data: res.data.data,
      },
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteBus = (id) => async (dispatch) => {
  try {
    const query = `schedules/${id}`
    const res = await axios.delete(config.APP_BACKEND.concat(query))
    dispatch({
      type: 'DELETE_BUS',
      payload: res.data,
    })
  } catch (error) {
    console.log(error)
  }
}
