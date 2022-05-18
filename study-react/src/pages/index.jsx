import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Footer } from '../components/Footer'
import { Main } from '../components/Main'
import { Header } from '../components/Header'
import { useCallback, useEffect } from 'react'

export default function Home() {
  const foo = "foo";
  const handleClick = useCallback((e) => {
    e.preventDefault()
    alert(foo)
  }, [])

  useEffect(() => {
    console.log("マウント時")
    document.body.style.backgroundColor = "lightblue"
    return () => {
      console.log("アンマウント時")
      document.body.style.backgroundColor = ""
    }
  },[])

  return (
    <div className={styles.container}>
      <Head>
        <title>IndexPage</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Header />
      <a
        href="/about"
        onClick={handleClick}
      >
        ボタン
      </a>
      <Main page="index"/>
      <Footer />
    </div>
  )
}
