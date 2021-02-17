import Head from 'next/head'

export default function CommonMeta() {
  return (
    <Head>
      <title>Photo Application</title>
      <meta property="og:title" content="Photo Application"/>
      <meta property="og:description" content="This is Photo Application!!!!"/>
      <meta property="og:image" content="/ogp_large.png"/>
      <meta name="twitter:card" content="summary_large_image"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
