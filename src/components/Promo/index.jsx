import React from "react"
import promoImg from "../../assets/img/Promo.png"

import "./Promo.scss"

export const Promo = () => {
  return (
    <div className="promo__outer">
      <div className="container">
        <div className="promo">
          <div className="promo__information">
            <div className="promo__information-title">
              Кредит под залог дома без справки о доходах в <span>Москве</span>
            </div>
            <div className="promo__information-text">
              Если Вам срочно понадобились деньги, а отсутствие справки о доходах мешает получить
              займ в банке, не отчаивайтесь. Мы собрали для Вас список микрофинансовых организаций,
              где можно оформить кредит без подтверждения дохода. Современная жизнь стоит дорого,
              поэтому финансовая поддержка не помешает. Заполните онлайн-анкету, указав данные
              паспорта, и получите необходимую сумму на банковскую карту.
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="js" />
          </div>
        </div>
      </div>
    </div>
  )
}
