import React from 'react';
import WordInput from './WordInput';
import TranslationInput from './TranslationInput';
import SaveWordBtn from './SaveWordBtn';

const AddWordWiev = props => {
  const { getWord, saveWordToDb, word, translation } = props;
  return (
    <form className="addWordContainer" onSubmit={e => saveWordToDb(e)}>
      <WordInput getWord={getWord} word={word} />
      <TranslationInput getWord={getWord} translation={translation} />
      <SaveWordBtn {...props} />
    </form>
  );
};

export default AddWordWiev;
