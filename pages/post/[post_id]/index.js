import Head from 'next/head'
import styles from '../../../styles/Home.module.css'

export default function Post({ postId }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>post_id: {postId}</title>
        <meta property="og:title" content={`post_id: ${postId}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          post_Id: {postId}
        </h1>
      </main>
    </div>
  )
}

export function getServerSideProps({ query }) {
  return {
    props: {
      postId: parseInt(query.post_id),
    },
  }
}