class NewsServices {
  _apiKey = '52ecd4ca77244977a7e8e59f9c42fd36';

  url = () => {
    return `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this._apiKey}`;
  };
  specificSourceUrl = source => {
    return `https://newsapi.org/v2/top-headlines?
    sources=${source}&
    apiKey=${this._apiKey}`;
  };

  async getRequest(url) {
    try {
      const res = await fetch(url);
      return res.json();
    } catch (err) {
      console.log(err);
    }
  }

  getNews = () => {
    return this.getRequest(this.url());
  };
}

export default NewsServices;
