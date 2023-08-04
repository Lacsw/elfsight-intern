class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка ${res.status}`);
    }
  }

  async getCharacters(page = `${this._baseUrl}/character`) {
    const response = await fetch(`${page}`, {
      method: 'GET',
      headers: this._headers,
    });
    return this._checkResponse(response);
  }

  async fliter({ name, status, gender, species }) {
    const response = await fetch(
      `${this._baseUrl}/character/?name=${name}&status=${status}&gender=${gender}&species=${species}`,
      {
        method: 'GET',
        headers: this._headers,
      }
    );
    return this._checkResponse(response);
  }
}

const api = new Api({
  baseUrl: 'https://rickandmortyapi.com/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
