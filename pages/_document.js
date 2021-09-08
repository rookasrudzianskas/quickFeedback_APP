import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
                    <meta content="#ffffff" name="theme-color" />
                    <meta content="#ffffff" name="msapplication-TileColor" />
                    <meta
                        content="/favicons/browserconfig.xml"
                        name="msapplication-config"
                    />
                    <link rel="icon" href="/favicon.ico" />
                    {/*<link href="/favicons/site.webmanifest" rel="manifest" />*/}
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com/"
                        crossOrigin=""
                    />
                    <link
                        rel="preconnect"
                        href="https://cdn.usefathom.com"
                        crossOrigin=""
                    />
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-04YMSG4ZHJ`}
                    />

                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                          window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());
                          gtag('config', 'G-04YMSG4ZHJ', { page_path: window.location.pathname });
                        `,
                        }}
                    />
                    {/*<link*/}
                    {/*    href="/favicons/apple-touch-icon.png"*/}
                    {/*    rel="apple-touch-icon"*/}
                    {/*    sizes="180x180"*/}
                    {/*/>*/}
                    {/*<link*/}
                    {/*    href="/favicons/favicon-32x32.png"*/}
                    {/*    rel="icon"*/}
                    {/*    sizes="32x32"*/}
                    {/*    type="image/png"*/}
                    {/*/>*/}
                    {/*<link*/}
                    {/*    href="/favicons/favicon-16x16.png"*/}
                    {/*    rel="icon"*/}
                    {/*    sizes="16x16"*/}
                    {/*    type="image/png"*/}
                    {/*/>*/}
                    {/*<link*/}
                    {/*    color="#4a9885"*/}
                    {/*    href="/favicons/safari-pinned-tab.svg"*/}
                    {/*    rel="mask-icon"*/}
                    {/*/>*/}
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
