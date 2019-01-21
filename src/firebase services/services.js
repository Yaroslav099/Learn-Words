import fb from '../firebase-config/config';

export default class FbServices {
  getUserName = () => 'admin';

  fbRef = (userName, word) => {
    const wordStr = word ? `/${word}` : '';
    return fb.database().ref(`${userName}${wordStr}`);
  };

  getWords = (userName, setData) => {
    this.fbRef(userName).on('value', snapshot => {
      const value = Object.values(snapshot.val()).map(item => Object.values(item));
      const words = value.map(item => item[0]);
      setData(words);
    });
  };

  saveWord = (word, translation) => {
    if (word && translation) {
      this.fbRef(this.getUserName(), word).push({ word, translation });
    }
  };

  deleteWord = (userName, word) => {
    this.fbRef(userName, word).set(null);
  };
}
