import React from "react";
import CreditInputDate from "./CreditInputDate";
import classNames from "classnames";

const CreditFooterSortItem = ({ item }) => {
  const [activeBtn, setActiveBtn] = React.useState(null);
  return (
    <div
      onClick={() => setActiveBtn(!activeBtn)}
      className={classNames("credit__footer-sort__item", {
        active: activeBtn
      })}
    >
      {item}
    </div>
  );
};

const CreditSearchForm = () => {
  return (
    <div className="credit__search">
      <div className="credit__header">
        <div className="subtitle">
          <span>Кредиты под залог дома</span>
          <span>Оформить онлайн кредит без справок о доходах</span>
        </div>
        <div className="title">
          Оформить кредит под залог дома без справок о доходах
        </div>
      </div>
      <div className="credit__input">
        <div className="credit__input-sum">
          <label htmlFor="">СуТребуемая сумма кредита</label>
          <input type="number" />
        </div>
        <CreditInputDate />
      </div>
      <div className="credit__footer">
        <div className="credit__footer-sort">
          {["Преимущества", "Тип имущества", "Кто выдает", "Еще фильтры+"].map(
            (sort, index) => (
              <CreditFooterSortItem
                item={sort}
                index={index}
                key={`${sort} ${index}`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default CreditSearchForm;
