import * as React from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import MainRouter from "./router/router"

export const App = () => (
  <ChakraProvider theme={theme}>
    <MainRouter />
  </ChakraProvider>
)
