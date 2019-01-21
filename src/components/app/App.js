import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../header';
import AddWord from '../../containers/addWord';
import Home from '../home';
import Learn from '../learn';
import NewsList from '../news';
import Article from '../news/Article';

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add/" component={AddWord} />
            <Route exact path="/learn/" component={Learn} />
            <Route exact path="/news/" component={NewsList} />
            <Route
              path="/news/:id"
              render={({ match }) => {
                const { id } = match.params;
                return <Article articleId={id} />;
              }}
            />
            <Route render={() => <h1>Page is not found</h1>} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}
