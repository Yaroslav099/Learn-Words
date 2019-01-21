import React, { Component } from 'react';
import FbServices from '../../firebase services';
import { AddWordWiev } from '../../components/addWord';

const { saveWord } = new FbServices();

const AddWord = () => {
  return class extends Component {
    state = {
      word: '',
      translation: '',
    };

    getWord = e => {
      this.setState({
        [e.target['name']]: e.target.value,
      });
    };

    saveWordToDb = e => {
      e.preventDefault();
      const { word, translation } = this.state;

      this.setState({
        word: '',
        translation: '',
      });

      saveWord(word, translation);
    };

    render() {
      return (
        <AddWordWiev getWord={this.getWord} saveWordToDb={this.saveWordToDb} {...this.state} />
      );
    }
  };
};

export default AddWord();
