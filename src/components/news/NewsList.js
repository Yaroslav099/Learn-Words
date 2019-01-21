import React, { Component } from 'react';
import Loader from '../loader';
import NewsListItem from './NewsListItem';
import NewsServices from '../../news-services.js';
import { withRouter } from 'react-router-dom';

const { getNews } = new NewsServices();

class NewsList extends Component {
  state = {
    news: [],
  };

  componentDidMount() {
    getNews().then(({ articles }) => this.setState({ news: articles }));
  }

  openArticle = id => {
    const { history } = this.props;
    history.push(`${id}/`);
  };

  render() {
    const { news } = this.state;
    if (news[0] !== undefined) {
      return (
        <div className="newsListContainer">
          {news.map((article, i) => (
            <NewsListItem article={article} id={i} key={i} openArticle={this.openArticle} />
          ))}
        </div>
      );
    } else {
      return <Loader />;
    }
  }
}

export default withRouter(NewsList);
