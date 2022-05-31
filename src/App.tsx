import Container from "./components/Container"
import GlobalStyle from "./global-styles"


const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Container>hello world</Container>
    </div>
  )
}

export default App
