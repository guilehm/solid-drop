import Container from "./components/Container"
import Register from "./components/Register"
import GlobalStyle from "./global-styles"
import { BrowserRouter, Routes, Route } from "react-router-dom"


import "react-toastify/dist/ReactToastify.css"
import Login from "./components/Login"

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>

          <Route path="/register" element={
            <Container>
              <Register />
            </Container>
          } />

          <Route path="/login" element={
            <Container>
              <Login />
            </Container>
          } />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App




