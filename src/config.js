class Config {
  constructor() {
    this.baseURL = 'https://nodepay.org';
    this.ipCheckURL = 'https://ipinfo.io/json';
    this.pingURL = 'http://13.215.134.222/api/network/ping';
    this.retryInterval = 30000;
    this.sessionURL = 'http://18.142.214.13/api/auth/session';
  }
}

module.exports = Config;
