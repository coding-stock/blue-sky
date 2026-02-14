'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import Team from '@/components/Team'
import About from '@/components/About'
import Gallery from '@/components/Gallery'
import Donation from '@/components/Donation'
import Loading from '@/components/Loading'
import Head from 'next/head'
export default function Home() {
  return (
    <>
    <Head>
      <link rel='icon' href="/assets/starry-sky.png" />
    </Head>
      <Loading />
      <header>
        <Navigation />
        <Hero />
      </header>
      <main>
        <Mission />
        <Team />
        <About />
        <Gallery />
        <Donation />
        <footer>
          <p>© 2025 Blue Sky Youth Leadership Program. All rights reserved.</p>
        </footer>
      </main>
    </>
  )
}
