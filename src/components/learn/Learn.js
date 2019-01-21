import React, { Component } from 'react';
import WordsList from '../../containers/learn';
import Loader from '../loader';
import FbServices from '../../firebase services';

const { getWords, getUserName } = new FbServices();

class Learn extends Component {
  state = {
    words: [],
  };

  setData = words => this.setState({ words });

  componentDidMount() {
    getWords(getUserName(), this.setData);
  }

  render() {
    const { words } = this.state;
    const isShown = words[0] !== undefined;
    const render = isShown ? <WordsList words={words} /> : <Loader />;
    return render;
  }
}

export default Learn;
