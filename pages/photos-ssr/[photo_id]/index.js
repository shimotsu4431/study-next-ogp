import axios from "axios";
import useSWR from 'swr'
import Head from 'next/head'
import getConfig from 'next/config'
import styles from '../../../styles/Home.module.css'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig
export const fetcher = (url)=> axios(url).then(res => res.data)

export async function getServerSideProps({ query }) {
  const data = await fetcher(`${API_URL}/photos/${query.photo_id}`)
  return { props: { data, query } }
}

export default function Photo(props) {
  const initialData = props.data
  const { data } = useSWR(`${API_URL}/todos`, fetcher, {
    initialData
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>【SSR】Photo_id: {props.query.photo_id}</title>
        <meta property="og:title" content={`【SSR】photo_id: ${props.query.photo_id}`} key="title" />
        <meta property="og:description" content={`${data.title}`} />
        <meta property="og:image" content={data.thumbnailUrl} />
        <meta name="twitter:card" content="summary"/>
      </Head>

      <main className={styles.main}>
        <h1>Photos - SSR</h1>
        <h2>
          Photo_Id: {props.query.photo_id}
        </h2>
        <img src={data.url} alt={data.title} />
      </main>
    </div>
  )
}
