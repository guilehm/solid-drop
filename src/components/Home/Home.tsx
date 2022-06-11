import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useJwt } from "react-jwt"
import { Link } from "react-router-dom"
import ApiService from "../../services/api-service"
import Button from "../Button"
import Container from "../Container"
import * as S from "./Home.styles"


type UserData = {
  id: number
  username: string
  exp: number
}

const Api = new ApiService()

const Home = () => {

  const [cookies, , removeCookie] = useCookies(["token", "refresh"])
  const { token, refresh } = cookies
  const { decodedToken, isExpired } = useJwt<UserData>(token)

  useEffect(() => {
    if (!refresh) return

    Api.getPlayerList()
      .then(res => console.log(res))
      .catch(err => console.log("ops", err))
  }, [refresh])

  return (
    <Container>
      <S.Title>rogue like</S.Title>
      {!isExpired && <S.Subtitle>Welcome {decodedToken?.username}!</S.Subtitle>}
      <S.List>

        <Button bgColor="green">start</Button>

        {!isExpired &&
          <Button
            bgColor="orange"
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
