export type UserCreateData = {
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

export type RefreshResponseData = {
  id: number
  token: string
}

