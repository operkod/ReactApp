import React from "react"
import { Route, Switch } from "react-router-dom"
import SignIn from "./SingnIn"
import Signup from "./Singnup"

import "./Auth.scss"

const Auth = () => {
  return (
    <div className="auth">
      <div className="auth__wrap">
        <Switch>
          <Route path="/auth/signup">
            <Signup />
          </Route>
          <Route path="/auth">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </div>
  )
}
export default Auth
