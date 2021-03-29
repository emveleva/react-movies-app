import React, { useContext } from "react"
import { Route, Redirect } from "react-router-dom"
import { AuthContext } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const [user, setUser] = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props => {
        return user.username ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
