import { Inter } from 'next/font/google'
import Nav from '@/components/Nav'
import Landing from '@/components/Landing'
import Info from '@/components/Info'
import Footer from '@/components/Footer'
import Trending from '@/components/Trending'
import Popular from '@/components/Popular'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  return (
    <>
      <Nav/>
      <Landing/>
      <Info/>
      <Trending/>
      <Popular/>
      <Footer/>
    </>
  )
}
