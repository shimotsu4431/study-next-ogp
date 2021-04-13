import useSWR from 'swr'
import { useRouter } from 'next/router'
import axios from "axios";
import Head from 'next/head'
import getConfig from 'next/config'
import styles from '../../../styles/Home.module.css'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

export default function Photo() {
  const router = useRouter()
  const { photo_id } = router.query

  const fetcher = (url)=> axios(url).then(res => res.data)
  const { data } = useSWR(`${API_URL}/photos/${photo_id}`, fetcher, {
    refreshInterval: 0
  })

  if (!data) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>{`【Client】photo_id: ${photo_id}`}</title>
        <meta property="og:title" content={`【Client】photo_id: ${photo_id}`} key="title" />
        <meta property="og:description" content={data.title} />
        <meta property="og:image" content={data.url} />
        <meta name="twitter:card" content="summary"/>
      </Head>

      <main className={styles.main}>
        <h1>Photos - client</h1>
        <h2>
          Photo_Id: {photo_id}
        </h2>
        <img src={data.url} alt={data.title} />
      </main>
    </div>
  )
}
