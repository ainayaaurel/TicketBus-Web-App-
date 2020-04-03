
import axios from 'axios'
import config from '../../utils/config'
axios.defaults.headers.common[
  'Authorization'
] = `Bearer ${localStorage.getItem('token_admin')}`

export const getBus = () => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat('busses'));
    console.log('asdasdsad', res)
    dispatch({
      type: 'GET_BUS',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const postBus = (create) => async dispatch => {
  try {
    const res = await axios.post(config.APP_BACKEND.concat('busses'), create);
    dispatch({
      type: 'POST_BUS',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateBus = (id, data) => async dispatch => {
  try {
    const res = await axios.patch(config.APP_BACKEND.concat(`busses/${id}`), data);
    if (res) {
      alert('SUCCES EDIT')
    } else {
      alert('NOT SUCCESS EDIT ')
    }
    dispatch({
      type: 'UPDATE_BUS',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}

export const getBusById = (id) => async dispatch => {
  try {
    const res = await axios.get(config.APP_BACKEND.concat(`busses/${id}`));
    dispatch({
      type: 'GET_BUS_BY_ID',
      payload: res.data.data
    })
  } catch (error) {
    console.log(error)
  }
}




// export function getAllDataBusses() {
//   return async function (dispatch) {
//     return axios.get(config.APP_BACKEND.concat('busses'))
//       .then(({ data }) => {
//         dispatch(getAllDataBusses(data));
//       })

//     // export async function getAllDataBusses() {
//     //   const results = await axios.get(config.APP_BACKEND.concat('busses'))
//     //   return {
//     //     type: 'GET_ALL_DATA_BUSSES',
//     //     payload: results
//     //   }
//     // }

//     export async function postBusses() {
//       const results = await axios.get(config.APP_BACKEND.concat('busses'))
//       return {
//         type: 'POST_DATA_BUSSES',
//         payload: results
//       }
//     }

//     export async function updateBusses(id, data) {
//       const results = await axios.patch(config.APP_BACKEND.concat(`busses/${id}`), data)
//       return {
//         type: 'UPDATE_BUSSES',
//         payload: results
//       }
//     }

//     export async function deleteBusses(id) {
//       const results = await axios.delete(config.APP_BACKEND.concat(`busses/${id}`)
//       )
//       return {
//         type: 'DELETE_BUSSES',
//         payload: results
//       }
//     }

//     export async function searchBusses(name) {
//       const results = await axios.get(config.APP_BACKEND.concat(`busses?search[busses]=${name}`))
//       return {
//         type: 'SEARCH_BUSSES',
//         payload: results
//       }
//     }
