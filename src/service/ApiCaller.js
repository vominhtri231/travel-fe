const API_URL = 'http://localhost:8080/';

class ApiCaller {
  static get(path, params) {
    return this.sendRequest(path, {
      method: 'get',
      params
    });
  }

  static create(path, data) {
    return this.sendRequest(path, {
      method: 'post',
      data
    });
  }

  static delete(path, params) {
    return this.sendRequest(path, {
      method: 'delete',
      params
    });
  }

  static update(path, data) {
    return this.sendRequest(path, {
      method: 'put',
      data
    });
  }

  static sendRequest(url, methodConfig) {
    const config = {
      ...methodConfig,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      responseType: 'json',
    };
    return fetch(`${API_URL}` + url, config)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          return Promise.reject(new Error(response.statusText));
        }
        return Promise.resolve(response.json());
      })
      .catch(error => {
        console.log(error);
      });
  }
}

export default ApiCaller;
