import axios from "axios"
import { useRef, useState } from "react"
import { useForm } from "react-hook-form"
import ApiService from "../../services/api-service"
import Button from "../Button"
import * as S from "./Register.styles"

const Api = new ApiService()

type FormData = {
  username: string
  password: string
  password2: string
}

const Register = () => {

  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm<FormData>({ reValidateMode: "onBlur", })

  const [data, setData] = useState<FormData>()

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

    const handleSuccess = () => {
      console.log("success")
    }

    const handleError = () => {
      console.log("error")
    }

    Api.createUser(values)
      .then(handleSuccess)
      .catch(handleError)
  }

  return (
    <>
      <S.Title>{"Let's register you"}</S.Title>
      <S.Subtitle>{"Welcome!"}</S.Subtitle>
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
    </>
  )
}


export default Register
