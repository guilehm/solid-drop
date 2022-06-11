import axios, { AxiosResponse } from "axios"
import { useRef, useState } from "react"
import { useCookies } from "react-cookie"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import ApiService, { RegisterResponseData } from "../../services/api-service"
import { ACCESS_TOKEN_LIFETIME, REFRESH_TOKEN_LIFETIME } from "../../settings"
import Arrow from "../Arrow"
import Button from "../Button"
import Container from "../Container"
import * as S from "./Register.styles"


const Api = new ApiService()

type FormData = {
  username: string
  password: string
  password2: string
}

const Register = () => {


  const [, setCookie,] = useCookies(["token", "refresh"])

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<FormData>({ reValidateMode: "onBlur", })

  const [, setData] = useState<FormData>()

  const navigate = useNavigate()

  const password = useRef({})
  password.current = watch("password", "")

  const validateUsername = async (username: string) => {
    try {
      const response = await Api.validateUsername(username)
      if (response.status === 200) return true
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 400) return "username not available"
      }
    }
    return "username could not be validated"
  }

  const onSubmit = (values: FormData) => {
    setData(values)

    const handleError = () => toast.error("could not create your account!")
    const handleSuccess = (res: AxiosResponse<RegisterResponseData>) => {
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
      toast.success("we've created your account for you!")
      setTimeout(() => navigate("/"), 2500)
    }

    Api.createUser(values)
      .then(handleSuccess)
      .catch(handleError)
  }

  return (
    <Container>
      <Arrow onClick={() => navigate(-1)}></Arrow>
      <S.Title>{"Let's register you"}</S.Title>
      <S.Subtitle>{"Welcome!"}</S.Subtitle>
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
            validate: validateUsername,
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

        <S.Input
          placeholder="confirm password"
          type="password"
          autoComplete="current-password"
          {...register("password2", {
            required: "please confirm your password",
            validate: (value) => value === password.current || "passwords don't match",
          })} />
        {errors.password2 && <S.Error>{errors.password2.message}</S.Error>}

        <S.List>
          <Button margin={"8px 8px 0 0"} color={"black"} bgColor={"#edf2f7"}>{"register"}</Button>
        </S.List>

      </S.Form>
    </Container>
  )
}


export default Register
