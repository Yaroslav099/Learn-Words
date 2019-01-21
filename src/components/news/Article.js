import React, { Component } from 'react';
import NewsServices from '../../news-services.js';
import Loader from '../loader';

const { getNews } = new NewsServices();

class Article extends Component {
  state = {
    article: null,
  };

  componentDidMount() {
    const { articleId } = this.props;
    getNews().then(news => {
      const { articles } = news;
      const article = articles[articleId];
      this.setState({ article });
    });
  }

  render() {
    const { article } = this.state;
    if (article) {
      const { author, title, urlToImage, content, url } = this.state.article;
      return (
        <div className="article">
          <img src={urlToImage} />
          <span className="author">{author}</span>
          <span className="title">{title}</span>
          <span className="content">{content}</span>
          <a href={url}>Read the whole article</a>
        </div>
      );
    } else return <Loader />;
  }
}

export default Article;
