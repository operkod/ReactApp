import React from "react"
import axios from "axios"

import creditAvatar from "../../assets/img/creditAvatar.png"
import star from "../../assets/img/star.svg"
import starActive from "../../assets/img/starActive.svg"
import { fetchCredit, setHideLoader, setShowLoader } from "../../redux/creditReducer"
import { useDispatch, useSelector } from "react-redux"
import LoadingCredit from "./LoadingCreditItem"

const Star = () => {
  return <img src={starActive} alt="js" />
}

const CreditItem = ({ item }) => {
  const writingStars = Math.floor(item.writing)
  const stars = Array.from({ length: writingStars }, (v, k) => k)
  return (
    <div className="creditBloc__item">
      <div className="creditBloc__item-left">
        <div className="creditBloc__item-avatar">
          <img src={creditAvatar} alt="JS" />
        </div>
        <div className="creditBloc__item-name">{item.name}</div>
        <div className="creditBloc__item-rating">
          <div className="rating__stars">
            {/* TODO  */}
            <div className="rating__stars-item">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <div className="rating__stars-active">
                {stars.map((item) => (
                  <Star key={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="rating__number">{item.writing}</div>
          <div className="creditBloc__item-reviews">{item.reviews} отзывов</div>
        </div>
      </div>
      <div className="creditBloc__item-center">
        <div className="creditBloc__item-center__title">{item.title}</div>
        <div className="creditBloc__item-inform">
          <div className="creditBloc__item-inform__col">
            <div className="title">{item.percent.number}</div>
            <div className="subtitle">{item.percent.title}</div>
            <div className="text">
              {item.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="creditBloc__item-inform__col">
            <div className="title">от {item.ofPrice} грн</div>
            <div className="subtitle">Переплата в день</div>
            <div className="text">
              {item.toPrice.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <div>Подробние</div>
      </div>
      <div className="creditBloc__item-right">
        <div className="creditBloc__item-btn">
          <button className="btn">Подать Заявку</button>
        </div>
        <div>Последний кредит выдан 41 мин. назад</div>
      </div>
    </div>
  )
}

const CreditBloc = () => {
  const dispatch = useDispatch()
  const item = useSelector((state) => state.credit.item)
  const loading = useSelector((state) => state.credit.loading)

  React.useEffect(() => {
    dispatch(setShowLoader())
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(fetchCredit(data.credit))
      dispatch(setHideLoader())
    })
  }, [dispatch])

  return (
    <div className="creditBloc">
      {loading ? (
        <>
          <LoadingCredit />
          <LoadingCredit />
          <LoadingCredit />
          <LoadingCredit />
        </>
      ) : (
        <div>
          {item.map((credit) => (
            <CreditItem item={credit} key={credit.id} />
          ))}
        </div>
      )}
    </div>
  )
}

export default CreditBloc
