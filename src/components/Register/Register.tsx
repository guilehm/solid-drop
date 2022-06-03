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
      <S.Title>{"Let's sign you in"}</S.Title>
      <S.Subtitle>{"Welcome back!"}</S.Subtitle>
      <S.Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <S.Input
          placeholder="email"
          type="email"
          {...register("email", {
            required: "please enter your email.",
          })} />
        {errors.email && <S.Error>{errors.email.message}</S.Error>}
        <S.Input
          placeholder="password"
          type="password"
          {...register("password", {
            required: "please enter your password",
            minLength: { value: 5, message: "min length is 5" },
          })} />
        {errors.password && <S.Error>{errors.password.message}</S.Error>}
        <S.List>
          <Button margin={"8px 8px 0 0"} color={"black"} bgColor={"#edf2f7"}>{"register"}</Button>
          <Button margin={"8px 8px 0 0"} color={"black"} bgColor={"#edf2f7"}>{"login"}</Button>
        </S.List>
      </S.Form>
    </>
  )
}


export default Register
