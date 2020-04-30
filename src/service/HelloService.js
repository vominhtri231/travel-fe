import ApiCaller from './ApiCaller';

const BASE_URL = 'hello';

class HelloService {
  static getHello() {
    return ApiCaller.get(`${BASE_URL}`);
  }
}

export default HelloService;