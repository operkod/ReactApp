import React from "react"
import { Link } from "react-router-dom"
import "./Error404.scss"

const Error404 = ({ title }) => {
  return (
    <div className="error">
      <div className="error__wrap">
        <h1> {title}</h1>
        <h2>Страница в разроботке</h2>
        <Link to="/" style={{ color: "#2e6aab", fontSize: "25px" }}>
          Bернуться на главную
        </Link>
      </div>
    </div>
  )
}
export default Error404
