import * as S from "./Register.styles"


const Register = () => {
  return (
    <>
      <S.Title>{"Let's sign you in"}</S.Title>
      <S.Subtitle>{"Welcome back!"}</S.Subtitle>
      <S.Form>
        <S.Input placeholder="email" type="email" />
        <S.Input placeholder="password" type="password" />
      </S.Form>
    </>
  )
}


export default Register
