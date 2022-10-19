export default class BaseResponse {

    constructor({ data, statusCode }) {
        this._data = data;
        this._statusCode = statusCode;
    }
    getData() {
        return this._data;
    }

    statusOK() {
        return this._statusCode === 200;
    }

    statusUnauthorize() {
        return this._statusCode === 401;
    }

    statusNotFound() {
        return this._statusCode === 404;
    }

    statusForbidden() {
        return this._statusCode === 403;
    }

    statusUnprocessableEntity() {
        return this._statusCode === 422;
    }

    statusInternalServerError() {
        return this._statusCode === 500;
    }

}