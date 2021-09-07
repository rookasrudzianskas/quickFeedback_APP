import {AuthProvider} from "@/lib/auth";
import {CSSReset, ThemeProvider} from "@chakra-ui/core";
import customTheme from "@/styles/theme";
import {Head} from "next/document";
import { Global, css } from '@emotion/core';
import {useEffect} from "react";
import {DefaultSeo} from "next-seo";
import SEO from "../next-seo.config";
import {Router} from "next/router";
import * as Fathom from "fathom-client";


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

    Router.events.on('routeChangeComplete', () => {
        Fathom.trackPageview();
    });


    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
                includedDomains: ['www.quickfeedback.digital']
            });
        }
    }, []);

  return (
       <ThemeProvider theme={customTheme}>
           <AuthProvider>
               <DefaultSeo {...SEO} />

               <GlobalStyle />
                <Component {...pageProps} />
           </AuthProvider>
        </ThemeProvider>
  )
}

export default MyApp
