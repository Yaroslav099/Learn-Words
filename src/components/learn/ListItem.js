import React, { Component } from 'react';
import DeleteWordBtn from './deleteWordBtn';
import ListItemWiev from './ListItemWiev';

class ListItem extends Component {
  state = {
    selected: false,
  };

  showTranslation = e => {
    if (e.target.className !== 'badge badge-primary badge-pill deleteWordBtn') {
      this.setState(({ selected }) => {
        return { selected: !selected };
      });
    }
  };

  render() {
    const { translation, word, deleteWordFromTheList, index } = this.props;
    const { selected } = this.state;

    return (
      <ListItemWiev
        selected={selected}
        word={word}
        translation={translation}
        index={index}
        showTranslation={this.showTranslation}
      >
        <DeleteWordBtn
          deleteWordFromTheList={deleteWordFromTheList}
          selected={selected}
          word={word}
        />
      </ListItemWiev>
    );
  }
}

export default ListItem;
