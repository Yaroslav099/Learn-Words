import React from 'react';

const deleteWordBtnClass = selected => (selected ? 'deleteWordBtn-active' : 'deleteWordBtn');

const DeleteWordBtn = ({ deleteWordFromTheList, word, selected }) => (
  <span
    className={`badge badge-primary badge-pill ${deleteWordBtnClass(selected)}`}
    onClick={() => {
      deleteWordFromTheList(word);
    }}
  >
    Delete
  </span>
);

export default DeleteWordBtn;
