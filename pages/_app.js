import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My new cool app</title>
        <meta property="og:title" content="My App" />
        <meta property="og:description" content="This is MY App." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp