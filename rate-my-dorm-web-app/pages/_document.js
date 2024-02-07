import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en" className="bg-cultured w-screen h-screen">
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Rate My Dorm" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <body className="w-screen h-screen">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}