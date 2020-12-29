import React from "react"
import facebookImg from "../../assets/img/social/facebook.svg"
import inImg from "../../assets/img/social/inkin.svg"
import instagramImg from "../../assets/img/social/instagram.svg"
import telegramImg from "../../assets/img/social/telegram.svg"
import twitterImg from "../../assets/img/social/twitter.svg"

const footerPartItem = {
  offer: [
    "Предложения",
    "Депозиты",
    "Депозиты с бонусом",
    "Кредитные карты",
    "Кредит наличными",
    "Автокредиты",
    "Ипотека",
    "Кредит на карту",
    "Перевод с карты на карту",
    "Мобильное приложение"
  ],
  banks: [
    "Банки и Страхование",
    "Банки Украины",
    "Сравнение банков",
    "Банковская аналитика",
    "Страховые компании",
    "Статьи",
    "Онлайн-страхование",
    "Онлайн ОСАГО",
    "Дополнительное покрытие к ОСАГО",
    "Медицина для водителя при ДТП",
    "Туристическая страховка",
    "Зеленая карта"
  ],
  about: ["О компании", "О проекте", "Контакты", "Пользовательское соглашение"]
}

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrap">
          <div className="footer__wrap-left">
            <div className="footer__part">
              {footerPartItem.offer.map((item, index) => (
                <FooterPart item={item} key={`${item}+ ${index}`} />
              ))}
            </div>
            <div className="footer__part">
              {footerPartItem.banks.map((item, index) => (
                <FooterPart item={item} key={`${item}+ ${index}`} />
              ))}
            </div>
            <div className="footer__part">
              {footerPartItem.about.map((item, index) => (
                <FooterPart item={item} key={`${item}+ ${index}`} />
              ))}
            </div>
          </div>
          <div className="footer__wrap-right">
            <div className="footer__description">
              Hotline.finance – популярный сайт сравнения страховок, депозитов, кредитов и кредитных
              карт. Сервис помогает потребителям делать осознанные финансовые решения в несколько
              кликов.
            </div>
            <div className="footer__social">
              <div className="footer__social-link">
                <img src={telegramImg} alt="" />
              </div>
              <div className="footer__social-link">
                <img src={facebookImg} alt="" />
              </div>
              <div className="footer__social-link">
                <img src={instagramImg} alt="" />
              </div>
              <div className="footer__social-link">
                <img src={twitterImg} alt="" />
              </div>
              <div className="footer__social-link">
                <img src={inImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const FooterPart = ({ item }) => {
  return <div className="footer__link">{item}</div>
}
export default Footer
