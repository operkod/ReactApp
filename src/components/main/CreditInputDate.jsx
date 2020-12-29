import React from "react"
import classNames from "classnames"
import arrow from "../../assets/img/arrow.svg"

const CreditInputList = ({ list, onChangeClick }) => {
  return (
    <div className="credit__input-date__list">
      <div onClick={() => onChangeClick(list)} className="list">
        {list.title}
      </div>
    </div>
  )
}

const CreditInputDate = () => {
  const [activeList, setActiveList] = React.useState(false)
  const [onChangeTitle, setOnChangeTitle] = React.useState("На какой срок")
  const deadlineList = () => {
    setActiveList((prev) => !prev)
  }

  const onHandlerChangeClick = (list) => {
    setOnChangeTitle(list.title)
  }

  const lists = [
    { title: "3 месеца", type: 3 },
    { title: "6 месеца", type: 6 },
    { title: "9 месеца", type: 9 },
    { title: "12 месеца", type: 12 }
  ]
  return (
    <div className="credit__input-date">
      <div className="credit__input-date-wrap">
        <div className="credit__input-date__title">{onChangeTitle}</div>
        <div onClick={deadlineList} className="credit__input-date__subtitle">
          <div className="subtitle">Выберите срок</div>
          <img
            className={classNames("list__img", { active: activeList })}
            src={arrow}
            alt="arrow"
          />
        </div>
        {activeList &&
          lists.map((list) => (
            <CreditInputList list={list} key={list.title} onChangeClick={onHandlerChangeClick} />
          ))}
      </div>
    </div>
  )
}
export default CreditInputDate
