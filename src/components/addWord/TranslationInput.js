import React from 'react';

const TranslationInput = ({ getWord, translation }) => {
  return (
    <input
      type="text"
      className="form-control addWordContainer-translationInput"
      placeholder="Translation for the word"
      name="translation"
      value={translation}
      onChange={e => getWord(e)}
    />
  );
};

export default TranslationInput;
