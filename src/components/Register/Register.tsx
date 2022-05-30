import { InputLabel, FormControl, Input, FormHelperText } from "@mui/material"
import { Container } from "@mui/system"


const Register = () => {
  return (
    <Container>
      <FormControl fullWidth={true} variant={"standard"}>
        <InputLabel htmlFor="email">email</InputLabel>
        <Input id="email" aria-describedby="email" />
        <FormHelperText id="email-helper">{"we'll never share your email."}</FormHelperText>
      </FormControl>
      <FormControl fullWidth={true} variant={"standard"}>
        <InputLabel htmlFor="password">password</InputLabel>
        <Input id="password" aria-describedby="password" type="password" />
        <FormHelperText id="password-helper">your secure password</FormHelperText>
      </FormControl>
    </Container>
  )
}


export default Register
