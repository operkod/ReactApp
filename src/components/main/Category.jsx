import React from "react"
import classNames from "classnames"
import arrow from "../../assets/img/arrow.svg"
import { useDispatch, useSelector } from "react-redux"
import { setCategory, setSortBy } from "../../redux/filterReducer"

const Category = () => {
  const [sortActive, setSortActive] = React.useState(false)
  const sortRef = React.useRef()
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)

  const setChangeSortBy = (item) => {
    dispatch(setSortBy(item))
  }
  const setChangeCategory = (item) => {
    dispatch(setCategory(item))
  }

  const handleOutsideClick = (e) => {
    if (!e.path.includes(sortRef.current)) {
      setSortActive(false)
    }
  }

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick)
  }, [])

  const onChangeClick = () => {
    setSortActive(!sortActive)
  }

  const categoryItems = [
    { name: "Все", type: 0 },
    { name: "Без справок", type: 1 },
    { name: "С плохой КИ", type: 2 },
    { name: "Без отказа", type: 3 },
    { name: "Безработным", type: 4 }
  ]

  const sortItem = [
    { name: "Лучшие", type: "good" },
    { name: "Популярные", type: "popular" }
  ]

  return (
    <div className="category">
      <div className="category-wrap">
        <div className="category__content">
          <div className="category__title">Тип: </div>
          {categoryItems.map((item, index) => (
            <div
              key={item.name}
              onClick={() => setChangeCategory(item.type)}
              className={classNames("category__item", {
                active: index === filter.category ? true : false
              })}
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="sort">
          <div className="sort__title">Сортировать:</div>
          <div ref={sortRef} onClick={onChangeClick} className="sort__wrap">
            <div className="sort__subtitle">
              <span>{filter.sortBy.name}</span>
              <img
                className={classNames("sort__img", { active: sortActive })}
                src={arrow}
                alt="arrow"
              />
            </div>
            {sortActive && (
              <div className="sort__item">
                {sortItem.map((item, index) => (
                  <div onClick={() => setChangeSortBy(item)} key={`${item.type}+ ${index}`}>
                    {item.name}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Category
