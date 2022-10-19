import axios from 'axios';
import { history } from '..';

import BaseResponse from '../responses/base-response';

export const LOGIN_USER_TOKEN = 'TECHIS_TASK_MANAGEMENT_LOGIN_USER_TOKEN';

var baseURL;
if (process.env.REACT_APP_ENVIRONMENT && process.env.REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL;
} else {
    baseURL = 'http://127.0.0.1:8000';
}

const http = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use(
    config => {
        config.headers.common['Authorization'] = localStorage.getItem(LOGIN_USER_TOKEN);
        return config;
    },
    error => {
        if (error.response.status === 401) {
            localStorage.removeItem(LOGIN_USER_TOKEN);
        }

        return Promise.reject(error);
    }
);

// response interceptor
http.interceptors.response.use(
    httpResponse => {
        const response = new BaseResponse({ data: httpResponse.data, statusCode: httpResponse.status });
        return Promise.resolve(response.getData());
    },
    error => {
        const response = new BaseResponse({ data: error.response.data, statusCode: error.response.status });
        if (response.statusUnprocessableEntity()) {
            return Promise.reject(response.getData());
        } else if (response.statusUnauthorize()) {
            localStorage.removeItem(LOGIN_USER_TOKEN);
            history.push('/login')
            return Promise.reject(response.getData());

        } else if (response.statusForbidden()) {
            localStorage.removeItem(LOGIN_USER_TOKEN);
            history.push('/login')
            return Promise.reject(response.getData());

        } else if (response.statusNotFound()) {
            return Promise.reject(response.getData());
        } else if (response.statusInternalServerError()) {
            return Promise.reject(response.getData());
        }

        return Promise.reject(error);
    }
);



export default http;
