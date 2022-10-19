import http from '../axios/index';

export default class BaseService {
    static get METHOD_GET() {
        return 'GET';
    }

    static get METHOD_POST() {
        return 'POST';
    }

    static get METHOD_PUT() {
        return 'PUT';
    }

    static get METHOD_DELETE() {
        return 'DELETE';
    }

    constructor(prefix) {
        this.prefix = prefix;
    }

    index(data = {}) {
        return this.performRequest(BaseService.METHOD_GET, '', data);
    }

    find(id) {
        return this.performRequest(BaseService.METHOD_GET, `${id}/`);
    }

    store(data) {
        return this.performRequest(BaseService.METHOD_POST, 'add/', data);
    }

    update(id, data) {
        return this.performRequest(BaseService.METHOD_PUT, `update/${id}/`, data);
    }

    destroy(id, data = {}) {
        return this.performRequest(BaseService.METHOD_DELETE, `delete/${id}/`, data);
    }

    performRequest(method, url, data = {}, headers = {}) {
        let options = {
            method,
            url: `${this.prefix}${url ? '/' + url : ''}`,
            data,
            headers,
            startTime: performance.now()
        };
        options[method.toUpperCase() === BaseService.METHOD_GET ? 'params' : 'data'] = data;
        return http(options);
    }
}
