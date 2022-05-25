import '../styles/globals.css'
import Head from 'next/head'
import { useCounter } from '../hooks/useCounter'
import { useInputArray } from '../hooks/useInputArray'
import { useBgColor } from '../hooks/useBgColor'


const MyApp = ({ Component, pageProps }) => {
  const counter = useCounter()
  const inputArray = useInputArray()
  useBgColor()

  return(
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  )
}

export default MyApp
