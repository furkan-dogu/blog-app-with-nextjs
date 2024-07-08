import { Stack, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Stack bgcolor={"#0C0C0C"} height={"10vh"} justifyContent={"center"} alignItems={"center"}>
      <Typography color={"white"}>
        Copyright &copy; 2024 by Furkan Doğu
      </Typography>
    </Stack>
  )
}

export default Footer