import BaseService from "./BaseService";

export default class PasswordResetServices extends BaseService {

    static async forgetPassword (params)
    {
        return new Promise((resolve, reject) => {
            this.request()
                .post('/forgot-password', params)
                .then(response => resolve(response))
                .catch(error => reject(error.response))
        })
    }
}