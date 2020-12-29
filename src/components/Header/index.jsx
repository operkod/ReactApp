import React from "react"
import { Link } from "react-router-dom"
import avatarStopper from "../../assets/img/avatar.png"
import bell from "../../assets/img/bell.png"
import "./Header.scss"

const Header = ({ avatar }) => {
  return (
    <div className="header__outer">
      <div className="container">
        <div className="header">
          <Link to="/" className="header__logo">
            <div className="logo">
              <div className="logo__title">
                Все<span>Залоги</span>
              </div>
              <div className="logo__subtitle">Найди кредит быстрее</div>
            </div>
          </Link>
          <nav className="header__nav">
            <ul>
              <li>
                <Link to="/strakhovaniye">Страхование онлайн</Link>
              </li>
              <li>
                <Link to="/creditCard">Кредит на карту</Link>
              </li>
              <li>
                <Link to="/creditBank">Кредит в банке</Link>
              </li>
              <li>
                <Link to="/deposit">Депозиты</Link>
              </li>
              <li>
                <Link to="/bank">Банки</Link>
              </li>
              <li>
                <Link to="/articles">Статьи</Link>
              </li>
              <li>
                <Link to="/pay">Платежи</Link>
              </li>
            </ul>
          </nav>
          <div className="header__toolbar">
            <div className="header__toolbar-location">Москва</div>
            <div className="header__toolbar-bell">
              <img src={bell} alt="bell" />
            </div>
            <Link to="/auth" className="header__toolbar-avatar">
              <img src={avatar ? avatar : avatarStopper} alt="avatar" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
