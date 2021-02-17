import axios from "axios";
import Head from 'next/head'
import getConfig from 'next/config'
import styles from '../../../styles/Home.module.css'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig
export const fetcher = (url)=> axios(url).then(res => res.data)

export async function getServerSideProps({ query }) {
  const data = await fetcher(`${API_URL}/photos/${query.photo_id}`)

  return {
    props: {
      photoId: parseInt(query.photo_id),
      ogp: data.thumbnailUrl
    },
  }
}

export default function Photo({ photoId, ogp }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>photo_id: {photoId}</title>
        <meta property="og:title" content={`photo_id: ${photoId}`} />
        <meta property="og:image" content={ogp} />
        <meta name="twitter:card" content="summary"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          photo_Id: {photoId}
        </h1>
      </main>
    </div>
  )
}
