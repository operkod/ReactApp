import React from "react";

const NewsItem = () => (
  <div className="news__item">
    <div className="news__item-img">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJU6vxcQ-hCX1BxKpCWHXhQeEoqJRpcPKMQ&usqp=CAU"
        alt="asd"
      />
    </div>
    <div className="news__item-title">
      Почему мне отказали в кредите МФО? Что влияет на выдачу микрокредита?
    </div>
  </div>
);

const NewNews = () => (
  <div className="section news">
    <div className="news__header">
      <div className="news__header-title">Новые публикации</div>
      <div className="news__header-subtitle">Все статьи</div>
    </div>
    <div className="news__content">
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </div>
  </div>
);

export default NewNews;
