import Link from "next/link"
import CommonMeta from '../components/CommonMeta'
import styles from '../styles/Home.module.css'

export default function Home() {

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
            <a>Photos - SSR</a>
          </Link>
        </div>
        <div>
          <Link href="/photos-client">
            <a>Photos - client</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
