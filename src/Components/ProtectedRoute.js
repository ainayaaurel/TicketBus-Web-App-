import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginAdmin } from '../Redux/Actions/Auth'

const ProtectedRoute = ({ component: Component, login, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (login === true) {
          return <Component {...rest} {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}

const mapStateToProps = (state) => ({
  login: state.auth.isLogin,
})

export default connect(mapStateToProps, { loginAdmin })(ProtectedRoute)

// catatan
