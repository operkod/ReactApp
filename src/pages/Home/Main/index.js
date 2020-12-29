import React from "react"
import {
  Category,
  CreditBloc,
  CreditCalculateInf,
  CreditSearchForm,
  NewNews,
  QuestionsBloc,
  TextBloc,
  SimpleSlider
} from "../../../components/main"
import { SidebarCategory, SidebarInformation } from "../../../components/sidebar"

const Main = () => {
  return (
    <>
      <div className="container">
        <div className="main">
          <CreditSearchForm />
          <Category />
          <CreditBloc />
          <CreditCalculateInf />
          <QuestionsBloc />
          <NewNews />
          <SimpleSlider />
          <TextBloc />
        </div>
        <div className="sidebar">
          <SidebarCategory />
          <SidebarInformation />
        </div>
      </div>
    </>
  )
}
export default Main
