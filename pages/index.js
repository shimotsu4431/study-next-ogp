import useSWR from 'swr'
import axios from "axios";
import Link from "next/link"
import getConfig from 'next/config'

import CommonMeta from '../components/CommonMeta'
import styles from '../styles/Home.module.css'

const { publicRuntimeConfig } = getConfig()
const { API_URL } = publicRuntimeConfig

export default function Home() {
  const fetcher = (url)=> axios(url).then(res => res.data)
  const { data, error } = useSWR(`${API_URL}/photos`, fetcher)

  if (error) return <div>failed to load</div>

  return (
    <div className={styles.container}>
      <CommonMeta />
      <main>
        <h1>Photo Appliation</h1>
        <div>
          <Link href="/about">
            <a>about</a>
          </Link>
        </div>
        <div>
          <Link href="/photos-ssr">
            <a>photos - SSR</a>
          </Link>
        </div>
        <div>
          <Link href="/photos-client">
            <a>photos - client</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
