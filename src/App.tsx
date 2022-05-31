import Container from "./components/Container"
import Register from "./components/Register"
import GlobalStyle from "./global-styles"


const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>
        <Register />
      </Container>
    </div>
  )
}

export default App
