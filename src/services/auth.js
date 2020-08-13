import axios from 'axios';
import config from '../config';

export default class auth {
  static async login(username, password) {
    const appCode = 'Hue-G';
    const appOS = 'IOS';
    const response = await axios.post(`${config.DOMAIN}${config.LOGIN}`, {
      username,
      password,
      appCode,
      appOS
    });
    console.log(response);
    console.log(response);
    if (response.data.success) {
      // AuthService.storeUserData(response.data);
    } else {
      throw new Error(response.data.error);
    }
  }
}
