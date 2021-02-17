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
      src: data.url,
      ogp: data.thumbnailUrl,
      title: data.title
    },
  }
}

export default function Photo({ photoId, ogp, src, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Photo_id: {photoId}</title>
        <meta property="og:title" content={`photo_id: ${photoId}`} />
        <meta property="og:description" content={`${title}`} />
        <meta property="og:image" content={ogp} />
        <meta name="twitter:card" content="summary"/>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Photo_Id: {photoId}
        </h1>
        <img src={src} alt={title} />
      </main>
    </div>
  )
}
