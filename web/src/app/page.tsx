import Image from 'next/image'
import Header from './Components/Header'
import Hero from './Components/Hero'
import DailyRecipe from './Components/DailyRecipe'

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <div className='flex gap-4'>
          <DailyRecipe />
          <Hero />
        </div>
      </main>
    </>
  )
}
