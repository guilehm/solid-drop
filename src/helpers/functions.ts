import { CookieSetOptions } from "universal-cookie"
import { ACCESS_TOKEN_LIFETIME, REFRESH_TOKEN_LIFETIME } from "../settings"


export const setCookies = (
  setCookie: (name: "token" | "refresh", value: string, options?: CookieSetOptions | undefined) => void,
  token: string,
  refresh: string,
) => {
  token && setCookie("token", token, {
    path: "/",
    maxAge: ACCESS_TOKEN_LIFETIME,
    sameSite: true,
  })
  refresh && setCookie("refresh", refresh, {
    path: "/",
    maxAge: REFRESH_TOKEN_LIFETIME,
    sameSite: true,
  })
}
