import React from "react"
import arrow from "../../assets/img/arrow.svg"
import classNames from "classnames"

const SidebarInformation = () => {
  return (
    <div className="section section-sidebar">
      <div className="sidebar__information">
        <div className="sidebar__information-title">Онлайн кредиты на сумму </div>
        <SidebarTab />
        <SidebarTab />
        <SidebarTab />
        <SidebarTab />
        <SidebarTab />
        <SidebarTab />
        <SidebarTab />
      </div>
    </div>
  )
}
const SidebarTab = () => {
  const [activeTab, setActiveTab] = React.useState(false)
  const onChangeTab = () => {
    setActiveTab(!activeTab)
  }

  return (
    <div onClick={onChangeTab} className="sidebar__tab">
      <div className="sidebar__tab-title">
        <span>Сравнение микрокредитов на 500 грн</span>
        <span>
          <img className={classNames({ "sidebar__tab-active": activeTab })} src={arrow} alt="" />
        </span>
      </div>
      {activeTab && <div className="sidebar__tab-text">Сравнение микрокредитов на 500 грн</div>}
    </div>
  )
}
export default SidebarInformation
