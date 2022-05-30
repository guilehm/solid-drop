import { Container } from "@mui/material"
import Box from "@mui/material/Box"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Stepper from "@mui/material/Stepper"
import { useState } from "react"
import Login from "../Login"
import Register from "../Register"


const steps = [
  "register",
  "login",
  "player",
]


const Steps = () => {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <>
      <button onClick={() => setActiveStep(activeStep + 1)}>+</button>
      <Container>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
      </Container>
      <Box sx={{ width: "100%" }}>
        {activeStep === 0 ? <Register /> : ""}
        {activeStep === 1 ? <Login /> : ""}
        {activeStep === 2 ? <div>3</div> : ""}
      </Box>
    </>

  )
}


export default Steps
