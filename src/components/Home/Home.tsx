import Button from "../Button"
import Container from "../Container"
import * as S from "./Home.styles"

import { Link } from "react-router-dom"


const Home = () => {

  const [cookies, , removeCookie] = useCookies(["token", "refresh"])

  const { token } = cookies
  const { decodedToken, isExpired } = useJwt<UserData>(token)
  return (
    <Container>
      <S.Title>rogue like</S.Title>
      <S.List>

        <Button bgColor="green">start</Button>

        <Link to="/login">
          <Button>login</Button>
        </Link>

        <Link to="register">
          <Button>register</Button>
        </Link>

      </S.List>
    </Container >
  )
}


export default Home
