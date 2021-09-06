import {AuthProvider} from "@/lib/auth";
import {CSSReset, ThemeProvider} from "@chakra-ui/core";
import customTheme from "@/styles/theme";
import {Head} from "next/document";
import { Global, css } from '@emotion/core';


const GlobalStyle = ({ children }) => {
    return (
        <>
            <CSSReset />
                <Global
                    styles={css`
              html {
                scroll-behavior: smooth;
                min-width: 360px;
                background-color: #edf2f7;
              }
              #__next {
                display: flex;
                flex-direction: column;
                min-height: 100vh;
              }
            `}
                />
            {children}
        </>
    );
};

function MyApp({ Component, pageProps }) {
  return (
       <ThemeProvider theme={customTheme}>
           <AuthProvider>
               <GlobalStyle />
                <Component {...pageProps} />
           </AuthProvider>
        </ThemeProvider>
  )
}

export default MyApp
