import {AuthProvider} from "../lib/auth";
import {CSSReset, ThemeProvider} from "@chakra-ui/core";
import customTheme from "../styles/theme";
import {Head} from "next/document";


function MyApp({ Component, pageProps }) {
  return (
       <ThemeProvider theme={customTheme}>
           <AuthProvider>
               <CSSReset />
                <Component {...pageProps} />
           </AuthProvider>
        </ThemeProvider>
  )
}

export default MyApp
