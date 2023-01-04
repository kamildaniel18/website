import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Articles, Features, Hero, About, Contact, Footer} from '../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kamil Daniel Legal</title>
        <meta name="description" content="Legal and Compliance advice." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Hero/>
      <Features/>
      <Articles/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  )
}
