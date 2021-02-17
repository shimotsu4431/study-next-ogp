import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Post() {
  return (
    <div className={styles.container}>
      <Head>
        <title>post index</title>
        <meta property="og:title" content="post index"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          post index
        </h1>
      </main>
    </div>
  )
}
