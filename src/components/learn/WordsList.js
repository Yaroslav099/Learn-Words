import React from 'react';
import ListItem from './ListItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const WordsListWiev = ({ words, deleteWordFromTheList }) => (
  <ul className="list-group">
    <TransitionGroup className="wordsContainer">
      {words.map(({ word, translation }, index) => {
        return (
          <CSSTransition key={word} timeout={1000} classNames="fade">
            <ListItem
              translation={translation}
              word={word}
              deleteWordFromTheList={deleteWordFromTheList}
              index={index}
              key={index}
            />
          </CSSTransition>
        );
      })}
      ;
    </TransitionGroup>
  </ul>
);

export default WordsListWiev;
