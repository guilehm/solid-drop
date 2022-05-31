import Button from "../Button"
import * as S from "./Register.styles"


const Register = () => {
  return (
    <>
      <S.Title>{"Let's sign you in"}</S.Title>
      <S.Subtitle>{"Welcome back!"}</S.Subtitle>
      <S.Form>
        <S.Input placeholder="email" type="email" />
        <S.Input placeholder="password" type="password" />
        <S.List>
          <Button margin={"8px 8px 0 0"} color={"black"} bgColor={"#edf2f7"}>{"register"}</Button>
          <Button margin={"8px 8px 0 0"} color={"black"} bgColor={"#edf2f7"}>{"login"}</Button>
        </S.List>
      </S.Form>
    </>
  )
}


export default Register
