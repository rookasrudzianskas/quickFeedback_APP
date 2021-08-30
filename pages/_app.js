import {AuthProvider} from "@/lib/auth";
import {CSSReset, ThemeProvider} from "@chakra-ui/core";
import customTheme from "@/styles/theme";
import {Head} from "next/document";

const GlobalStyle = ({ children }) => {
    return (
        <>
            <Head>
                <meta content="width=device-width, initial-scale=1" name="viewport" />
            </Head>
            <CSSReset />
                <Global
                    styles={css`
              html {
                scroll-behavior: smooth;
                min-width: 360px;
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
               <CSSReset />
                <Component {...pageProps} />
           </AuthProvider>
        </ThemeProvider>
  )
}

export default MyApp
