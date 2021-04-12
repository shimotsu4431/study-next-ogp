import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>My App</title>
          <meta property="og:title" content="My App" />
          <meta property="og:description" content="This is MY App." />
          <meta name="twitter:card" content="summary"/>
          <meta name="format-detection" content="telephone=no" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href="/img/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
