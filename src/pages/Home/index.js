import React from "react"
import { Switch, Route } from "react-router-dom"
import { Error404 } from "../../components/common"
import { Footer, MobileApp } from "../../components/Footer"
import Header from "../../components/Header"
import { Promo } from "../../components/Promo"
import Main from "./Main"

const Home = () => {
  return (
    <div className="wrapper">
      <Header />
      <Promo />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/strakhovaniye">
          <Error404 title={"Страхование онлайн"} />
        </Route>
        <Route exact path="/creditCard">
          <Error404 title={"Кредит на карту"} />
        </Route>
        <Route exact path="/creditBank">
          <Error404 title={"Кредит в банке"} />
        </Route>
        <Route exact path="/deposit">
          <Error404 title={"Депозиты"} />
        </Route>
        <Route exact path="/bank">
          <Error404 title={"Банки"} />
        </Route>
        <Route exact path="/articles">
          <Error404 title={"Статьи"} />
        </Route>
        <Route exact path="/pay">
          <Error404 title={"Платежи"} />
        </Route>
      </Switch>
      <MobileApp />
      <Footer />
    </div>
  )
}
export default Home
