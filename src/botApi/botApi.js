import { API_BASE_ADDRESS, } from './../utils/constants'
class BotApi {
    constructor(token) {
        this._token = token;
        this._apiAddress = `${API_BASE_ADDRESS}bot${token}/`;
    }

    callToApiWithMethod(method) {
        return `${this._apiAddress}${method}`;
    }

    getUpdateAddress() {
        return this.callToApiWithMethod('getUpdates');
    }
}