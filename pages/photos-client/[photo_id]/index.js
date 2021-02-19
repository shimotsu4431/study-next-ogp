import useSWR from 'swr'
import axios from "axios";
import Head from 'next/head'
import getConfig from 'next/config'
import styles from '../../../styles/Home.module.css'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig
export const fetcher = (url)=> axios(url).then(res => res.data)

Photo.getInitialProps = async ({ query }) => {
  return { query };
};

export default function Photo({ query }) {
  const fetcher = (url)=> axios(url).then(res => res.data)
  const { data } = useSWR(`${API_URL}/photos/${query.photo_id}`, fetcher, {
    refreshInterval: 0
  })

  if (!data) return <div>loading...</div>

  return (
    <div className={styles.container}>
      <Head>
        <title>【Client】Photo_id: {query.photo_id}</title>
        <meta property="og:title" content={`【Client】photo_id: ${query.photo_id}`} />
        <meta property="og:description" content={data.title} />
        <meta property="og:image" content={data.url} />
        <meta name="twitter:card" content="summary"/>
      </Head>

      <main className={styles.main}>
        <h1>Photos - client</h1>
        <h2>
          Photo_Id: {query.photo_id}
        </h2>
        <img src={data.url} alt={data.title} />
      </main>
    </div>
  )
}
