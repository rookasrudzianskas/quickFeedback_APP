import {AuthProvider} from "../lib/auth";
import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import theme from "../styles/theme";


function MyApp({ Component, pageProps }) {
  return (
      <ChakraProvider theme={theme}>
          <AuthProvider>
             <Component {...pageProps} />
          </AuthProvider>
      </ChakraProvider>
  )
}

export default MyApp
