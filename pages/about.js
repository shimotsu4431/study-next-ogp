import CommonMeta from '../components/CommonMeta'
import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <CommonMeta title="About" description="This is About page." />

      <main className={styles.main}>
        <h1 className={styles.title}>
          about
        </h1>
        <p>This is about page.</p>
      </main>
    </div>
  )
}
