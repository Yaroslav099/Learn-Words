import React from 'react';

const WordInput = ({ getWord, word }) => {
  return (
    <input
      type="text"
      className="form-control addWordContainer-wordInput"
      placeholder="Enter new word"
      name="word"
      value={word}
      onChange={e => getWord(e)}
    />
  );
};

export default WordInput;
