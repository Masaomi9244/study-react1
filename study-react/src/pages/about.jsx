import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Header } from '../components/Header'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AboutPage</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <Main page="about"/>
      <Footer />
    </div>
  )
}
