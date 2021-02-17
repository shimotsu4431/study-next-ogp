import CommonMeta from '../components/CommonMeta'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <CommonMeta />

      <main className={styles.main}>
        <h1 className={styles.title}>
          about
        </h1>
      </main>
    </div>
  )
}
