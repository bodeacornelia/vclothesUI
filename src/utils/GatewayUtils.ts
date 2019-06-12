import axios from 'axios';
import Auth from '../utils/AuthenticationUtils';
import config from '../../config/environments/development';

const CONTENT_TYPE = 'application/json';
const DEFAULT_METHOD = 'GET';

interface IOptions {
  method?: string;
  url?: string;
  data?: object | string;
  headers?: object;
  cache?: any;
}

interface IRequest {
  data: any;
}

export default class Gateway {
  get config() {
    return config;
  }

  get defaultMethod() {
    return DEFAULT_METHOD;
  }

  get baseUrl(): string {
    const backendUrl = `${this.config.BACKEND_PROTOCOL}${this.config.BACKEND_HOSTNAME}:${this.config.BACKEND_PORT}`
    return `${backendUrl}${this.config.API_BASE}`;
  }

  get headers(): object {
    return {
      'Content-Type': CONTENT_TYPE,
      'Authorization': `bearer ${Auth.getToken()}`,
    };
  }

  get client() {
    return axios.create({
      baseURL: this.baseUrl,
      headers: this.headers,
    });
  }

  request(url, data?): Promise<IRequest> {
    const options: IOptions = this.requestOptions(url, data);

    return this.client(options)
      .then(this.onSuccess)
      .catch(this.onError);
  }

  private onSuccess(response) {
    return response;
  }

  private onError(error) {
    return Promise.reject(error.response || error.message);
  }

  private requestOptions(endpoint, data): IOptions {
    const options: IOptions = {};

    options.method = this.defaultMethod;
    options.url = `${endpoint}`;
    options.data = data;

    return options;
  }
}
