import Box from "@mui/material/Box"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Stepper from "@mui/material/Stepper"
import { useState } from "react"


const steps = [
  "login",
  "player",
]


const Steps = () => {
  const [activeStep, setActiveStep] = useState(0)
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  )
}


export default Steps
