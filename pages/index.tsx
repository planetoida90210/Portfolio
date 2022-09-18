import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Michał Bryk - Porfolio</title>
      </Head>
      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact */}
    </div>
  )
}

export default Home
