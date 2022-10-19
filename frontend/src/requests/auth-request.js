import BaseRequest from './base-request';

class AuthRequest extends BaseRequest {
    signIn(data) {
        return this.performRequest(BaseRequest.METHOD_POST, "signin/", data);
    }

    checkLogin() {
        return this.performRequest(BaseRequest.METHOD_GET, "check-login/");
    }
}

export default new AuthRequest('users');