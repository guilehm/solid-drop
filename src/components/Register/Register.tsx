import { useState } from "react"
import { useForm } from "react-hook-form"
import Button from "../Button"
import * as S from "./Register.styles"




const Register = () => {

  const { register, handleSubmit, formState: { errors }
  } = useForm({ reValidateMode: "onBlur", })
  const [data, setData] = useState("")

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
          })} />
        {errors.username && <S.Error>{errors.username.message}</S.Error>}
        {/* <S.Input
          placeholder="email"
          type="email"
          {...register("email")} />
        {errors.email && <S.Error>{errors.email.message}</S.Error>} */}
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
          <Button margin={"8px 8px 0 0"} color={"black"} bgColor={"#edf2f7"}>{"register"}</Button>
        </S.List>
      </S.Form>
    </>
  )
}


export default Register
