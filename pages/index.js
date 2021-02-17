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
        <h1>Photos</h1>
        <Link href="/about">
          <a>about</a>
        </Link>
        {data && data.length >= 1 && (
          <ul>
            {data.slice(1, 10).map((item) => {
              return (
                <li>
                  <Link href={`/photos/${item.id}`}>
                    <a>
                      {item.id}: {item.title}
                    </a>
                </Link>
                </li>
              )
            })}
          </ul>
        )}
      </main>
    </div>
  )
}
