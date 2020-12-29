import React, { Suspense } from "react"
import { Route, Switch } from "react-router-dom"
import Home from "./pages/Home"

const Auth = React.lazy(() => import("./pages/Auth"))

const App = () => {
  return (
    <div className="wrapper">
      <Switch>
        <Route path="/auth">
          <Suspense fallback={<div>Загрузка...</div>}>
            <Auth />
          </Suspense>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
export default App
