import { AuthLogin } from "../models/AuthSlice";
import { AxiosService } from "./AxiosServices";

export class AuthServices {
  private http: AxiosService;

  constructor() {
    this.http = new AxiosService()
  }

  async login(username: string, password: string,) {
  
      const response = await this.http.post({
        url: '/v1/login',
        body: {
          email: username,
          password,
        }
      })
      if(response) {
        return  response.data as AuthLogin
      }
      return null
    }
}

