import { Inter } from 'next/font/google'
import Landing from '@/components/Landing'
import Info from '@/components/Info'
import Trending from '@/components/Trending'
import Popular from '@/components/Popular'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  
  return (
    <>
      <Landing/>
      <Info/>
      <Trending/>
      <Popular/>
    </>
  )
}
