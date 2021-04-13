import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Photo Appliation</title>
        <meta property="og:title" content="Photo Appliation" />
        <meta property="og:description" content="This is Photo Appliation." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp