import axios, { AxiosInstance, AxiosResponse } from "axios"
import { Cookies } from "react-cookie"
import { ACCESS_TOKEN_LIFETIME } from "../settings"
import { LoginResponseData, RefreshResponseData, RegisterResponseData, UserCreateData } from "../types/api-types"
import { Player } from "../types/game-types"


const REACT_APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080"


class ApiService {
  url: string
  client: AxiosInstance

  constructor(url: string = REACT_APP_API_URL) {
    this.url = url
    this.client = this.getClient()
  }

  getClient() {
    const cookies = new Cookies(["token", "refresh"])
    const client = axios.create()

    client.interceptors.request.use(
      (config) => {
        const token = cookies.get("token")
        if (token && config.headers) {
          config.headers["Authorization"] = token
        }
        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )

    client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const cookies = new Cookies(["token", "refresh"])
        const refreshToken = cookies.get("refresh")
        const originalRequest = error.config
        if (
          refreshToken &&
          !originalRequest._retry &&
          error.response.status === 401 || error.response.status === 403
        ) {
          originalRequest._retry = true
          const response = await this.refreshTokens(refreshToken)
          axios.defaults.headers.common["Authorization"] = response.data.token
          cookies.set("token", response.data.token, {
            path: "/",
            maxAge: ACCESS_TOKEN_LIFETIME,
            sameSite: true,
          })
          return client(originalRequest)
        }
        return Promise.reject(error)
      }
    )
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

  getPlayerList(): Promise<AxiosResponse<Array<Player>>> {
    return this.client.get(`${this.url}/players/`)
  }

  refreshTokens(refreshToken: string): Promise<AxiosResponse<RefreshResponseData>> {
    return this.client.post(`${this.url}/users/refresh/`, { "refresh_token": refreshToken })
  }

}


export default ApiService
