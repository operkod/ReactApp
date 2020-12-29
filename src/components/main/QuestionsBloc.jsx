import React from "react"

export const questions = [
  {
    id: 1,
    title: "Как взять кредит на карту?",
    text: "Как взять кредит на карту?"
  },
  {
    id: 2,
    title: "Влияют ли микрокредиты на кредитную историю?",
    text: "Влияют ли микрокредиты на кредитную историю?"
  },
  {
    id: 3,
    title: "На какую карту можно оформить кредит?",
    text: "На какую карту можно оформить кредит?"
  },
  {
    id: 4,
    title: "Что будет, если вовремя не погасить кредит?",
    text: "Что будет, если вовремя не погасить кредит?"
  },
  {
    id: 5,
    title: "Выпустят ли за границу при наличии открытого кредита?",
    text: "Выпустят ли за границу при наличии открытого кредита?"
  },
  {
    id: 6,
    title: "Как узнать, есть ли у человека кредит в Украине?",
    text: "Как узнать, есть ли у человека кредит в Украине?"
  },
  {
    id: 7,
    title: "Что делать, если названивают коллекторы?",
    text: "Что делать, если названивают коллекторы?"
  },
  {
    id: 8,
    title: "Кредитный рейтинг: способы повышения репутации заемщика",
    text: "способы"
  },
  {
    id: 9,
    title: "Как оплатить кредит через терминал?",
    text: "Как оплатить кредит через терминал?"
  }
]

const QuestionItem = ({ item }) => {
  const [active, setActive] = React.useState(false)

  const onChange = () => {
    setActive(!active)
  }
  return (
    <div className="question__item" onClick={onChange}>
      <div className="question__subtitle">{item.title}</div>
      <div style={{ maxHeight: active ? "500px" : "0" }} className="question__text">
        {item.text}
      </div>
    </div>
  )
}

const QuestionsBloc = () => {
  return (
    <div className="questions">
      <div className="questions__title">Часто задаваемые вопросы:</div>
      {questions.map((obj) => (
        <QuestionItem key={obj.id} item={obj} />
      ))}
    </div>
  )
}
export default QuestionsBloc
