import {AuthProvider} from "../lib/auth";
import {ThemeProvider} from "@chakra-ui/core";
import theme from "../styles/theme";
import {Head} from "next/document";


function MyApp({ Component, pageProps }) {
  return (
       <ThemeProvider theme={theme}>
           <AuthProvider>
                <Component {...pageProps} />
           </AuthProvider>
        </ThemeProvider>
  )
}

export default MyApp
