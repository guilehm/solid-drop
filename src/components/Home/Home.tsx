import Button from "../Button"
import Container from "../Container"
import * as S from "./Home.styles"

import { useCookies } from "react-cookie"
import { useJwt } from "react-jwt"
import { Link } from "react-router-dom"


type UserData = {
  id: number
  username: string
  exp: number
}

const Home = () => {

  const [cookies, , removeCookie] = useCookies(["token", "refresh"])

  const { token } = cookies
  const { decodedToken, isExpired } = useJwt<UserData>(token)

  return (
    <Container>
      <S.Title>rogue like</S.Title>
      {!isExpired && <S.Subtitle>Welcome {decodedToken?.username}!</S.Subtitle>}
      <S.List>

        <Button bgColor="green">start</Button>

        {!isExpired &&
          <Button
            bgColor="red"
            onClick={() => { removeCookie("token"), removeCookie("refresh") }}>
            logout
          </Button>}

        {isExpired &&
          <Link to="login">
            <Button>login</Button>
          </Link>}

        {isExpired &&
          <Link to="register">
            <Button>register</Button>
          </Link>}

      </S.List>
    </Container >
  )
}


export default Home
