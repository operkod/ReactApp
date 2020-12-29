import React from "react"
import MobileImg from "../../assets/img/mobile.png"
import MobileAppStoreImf from "../../assets/img/mobileAppStore.svg"
import MobileGooglePlayImg from "../../assets/img/mobileGooglePlay.svg"

const MobileApp = () => {
  return (
    <div className="mobile">
      <div className="container">
        <div className="mobile__img">
          <img src={MobileImg} alt="" />
        </div>
        <div className="mobile__description">
          <div className="mobile__description-title">
            Приложение Hotline.Finance - страхование в смартфоне
          </div>
          <div className="mobile__description-subtitle">
            Первое в Украине приложение для покупки, продления и хранения страховых полисов
          </div>
        </div>
        <div className="mobile__app">
          <img src={MobileAppStoreImf} alt="" />
          <img src={MobileGooglePlayImg} alt="" />
        </div>
      </div>
    </div>
  )
}
export default MobileApp
