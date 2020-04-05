import axios from 'axios'
import config from '../../utils/config'
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem('token_admin')}`

export const getAgents = () => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat('agents'));
    dispatch({
      type: 'GET_AGENTS',
      payload: {
        pageInfo: res.data.pageInfo,
        data: res.data.data
      }
    })
  } catch (error) {
    console.log(error)
  }
}
export const postAgents = (create) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('agents'), create);
    dispatch({
      type: 'POST_AGENTS',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}
export const updateAgents = (id, data) => async dispatch => {
  try {
    const res = await axios.patch(config.APP_BACKEND.concat(`agents/${id}`), data);
    if (res) {
      alert('SUCCES EDIT')
    } else {
      alert('NOT SUCCESS EDIT ')
    }
    dispatch({
      type: 'UPDATE_AGENTS',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getAgentsById = (id) => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`agents/${id}`));
    dispatch({
      type: 'GET_AGENTS_BY_ID',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const searchDataAgents = (name) => async dispatch => {
  try {
    const query = `agents?search[value]=${name}`
    console.log(query)
    const res = await axios.get(config.APP_BACKEND.concat(query));
    dispatch({
      type: 'SEARCH_DATA',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const movePageAgents = (page) => async dispatch => {
  try {
    const query = `agents?page=${page}`
    console.log(query)
    const res = await axios.get(config.APP_BACKEND.concat(query));
    dispatch({
      type: 'MOVE_PAGE',
      payload: {
        pageInfo: res.data.pageInfo,
        data: res.data.data
      }
    })
  } catch (error) {
    console.log(error)
  }
}
