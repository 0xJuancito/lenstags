import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Nav } from '../components/Nav/Nav'
import Principal from '../components/Principal'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="h-screen bg-white">
      
        <Nav/>
      
        <Principal/>

      </main>

      <footer className="">
       
      </footer>
    </div>
  )
}

export default Home
