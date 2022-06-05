import { useForm } from "react-hook-form"
import { Axios, AxiosError, AxiosResponse } from "axios"
import { useCookies } from "react-cookie"
import { ToastContainer, toast } from "react-toastify"
import ApiService, { LoginResponseData } from "../../services/api-service"
import Button from "../Button"
import Container from "../Container"
import * as S from "../Register/Register.styles"
import { ACCESS_TOKEN_LIFETIME, REFRESH_TOKEN_LIFETIME } from "../../settings"

const Api = new ApiService()

type FormData = {
  username: string
  password: string
}

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ reValidateMode: "onBlur", })
  const [, setCookie,] = useCookies(["token", "refresh"])

  const onSubmit = (values: FormData) => {
    const handleError = (error: AxiosError) => {
      if (error.response?.status === 404) toast.error("user not found")
      if (error.response?.status === 400) toast.error("invalid password")
      if (error.response?.status === 500) toast.error("could not log you in")
    }

    const handleSuccess = (res: AxiosResponse<LoginResponseData>) => {
      setCookie("token", res.data.token, {
        path: "/",
        maxAge: ACCESS_TOKEN_LIFETIME,
        sameSite: true,
      })
      setCookie("refresh", res.data.refresh_token, {
        path: "/",
        maxAge: REFRESH_TOKEN_LIFETIME,
        sameSite: true,
      })
      toast.success("logged in!")
      // TODO: redirect user
    }

    Api.login(values.username, values.password)
      .then(handleSuccess)
      .catch(handleError)

  }

  return (
    <Container>
      <S.Title>{"Let's sign you in"}</S.Title>
      <S.Subtitle>{"Welcome back!"}</S.Subtitle>
      <ToastContainer
        autoClose={2000}
        position="bottom-center"
      />

      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Input
          placeholder="username"
          autoComplete="username"
          {...register("username", {
            required: "please enter your username",
            minLength: { value: 3, message: "min length is 3" },
            maxLength: { value: 50, message: "max length is 50" },
          })} />
        {errors.username && <S.Error>{errors.username.message}</S.Error>}

        <S.Input
          placeholder="password"
          type="password"
          autoComplete="current-password"
          {...register("password", {
            required: "please enter your password",
            minLength: { value: 5, message: "min length is 5" },
          })} />
        {errors.password && <S.Error>{errors.password.message}</S.Error>}

        <S.List>
          <Button margin={"8px 8px 0 0"} color={"black"} bgColor={"#edf2f7"}>{"login"}</Button>
        </S.List>

      </S.Form>
    </Container>
  )
}


export default Login
