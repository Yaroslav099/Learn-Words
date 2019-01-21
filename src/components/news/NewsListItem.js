import React from 'react';

const NewsListItem = ({ article, id, openArticle }) => {
  const { author, description, title, urlToImage } = article;

  return (
    <div className="newsListItem" onClick={() => openArticle(id)}>
      <div className="imgContainer">
        <img src={urlToImage} className="newsImg" />
      </div>
      <span className="author">{author}</span>
      <span className="title">{title}</span>
      <span className="description">{description}</span>
    </div>
  );
};

export default NewsListItem;
