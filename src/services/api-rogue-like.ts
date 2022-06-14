import axios, { AxiosInstance, AxiosResponse } from "axios"
import { REACT_APP_API_ROGUE_URL } from "../settings"
import { Sprite } from "../types/game-types"


class ApiRogueLike {
  url: string
  client: AxiosInstance

  constructor(url: string = REACT_APP_API_ROGUE_URL) {
    this.url = url
    this.client = axios.create()
  }

  getSpriteList(): Promise<AxiosResponse<Array<Sprite>>> {
    return this.client.get(`${this.url}/sprites/`)
  }

}

export default ApiRogueLike
