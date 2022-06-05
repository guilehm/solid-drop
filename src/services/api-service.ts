import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios"


const REACT_APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080"


type UserCreateData = {
  username: string
  email?: string
  password: string
}

export type RegisterResponseData = {
  id: number
  token: string
  refresh_token: string
  email?: string
  date_joined: string
}

export type LoginResponseData = {
  id: number
  token: string
  refresh_token: string
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

  login(username: string, password: string): Promise<AxiosResponse<LoginResponseData>> {
    return this.client.post(`${this.url}/users/login/`, { username, password })
  }

  createUser(data: UserCreateData): Promise<AxiosResponse<RegisterResponseData>> {
    return this.client.post(`${this.url}/users/`, data)
  }

  validateUsername(username: string): Promise<AxiosResponse> {
    return this.client.post(`${this.url}/users/validate/username/`, { username })
  }

}


export default ApiService
