import axios, { AxiosInstance } from "axios"


const REACT_APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080"


type UserCreateData = {
  username: string
  email?: string
  password: string
}

class ApiService {
  url: string
  client: AxiosInstance

  constructor(url: string = REACT_APP_API_URL) {
    this.url = url
    this.client = this.getClient()
  }

  getClient() {
    const client = axios.create()
    return client
  }

  createUser(data: UserCreateData) {
    return this.client.post(`${this.url}/users/`, data)
  }

}


export default ApiService
