import React, { Component } from 'react';
import FbServices from '../../firebase services';
import WordsListWiev from '../../components/learn/WordsList';

const { deleteWord, getUserName } = new FbServices();

class WordsList extends Component {
  state = {
    words: [],
  };

  deleteWordFromTheList = word => {
    const { words } = this.state;
    const prevWords = words.slice();
    const filteredWords = prevWords.filter(item => item.word !== word);
    this.setState({ words: filteredWords });
    deleteWord(getUserName(), word);
  };

  componentDidMount() {
    const { words } = this.props;
    this.setState({ words });
  }

  render() {
    const { words } = this.state;
    return <WordsListWiev words={words} deleteWordFromTheList={this.deleteWordFromTheList} />;
  }
}

export default WordsList;
