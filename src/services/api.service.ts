const baseURL = process.env.VUE_APP_BASE_URL
export default class ApiService {
   static async getRates(http: any,) {
        return http.get(baseURL);
    }
}