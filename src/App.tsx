import Layout from "./templates/Layout"
import CssBaseline from "@mui/material/CssBaseline"
import Steps from "./components/Steps"


const App = () => {
  return (
    <div className="App">
      <CssBaseline />
      <Layout>
        <Steps />
      </Layout>
    </div>
  )
}

export default App
