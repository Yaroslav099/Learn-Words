import React, { Component } from 'react';

class ListItemWiev extends Component {
  render() {
    const { selected, word, translation, index, showTranslation } = this.props;
    let wordClass, translationClass, wordContainerClass;

    wordClass = selected ? 'word word-active' : 'word';
    translationClass = selected ? 'translation translation-active' : 'translation';

    return (
      <li
        className={`list-group-item d-flex justify-content-end align-items-center ${wordContainerClass} `}
        key={index}
        onClick={e => showTranslation(e)}
      >
        <span className={translationClass}>{translation}</span>
        <span className={wordClass}>
          {<p>{word}</p>}
          {this.props.children}
        </span>
      </li>
    );
  }
}

export default ListItemWiev;
