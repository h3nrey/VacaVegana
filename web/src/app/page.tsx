import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import DailyRecipe from '../components/DailyRecipe/DailyRecipe'
import StarredRecipes from '@/components/Home/StarredRecipes'

type Recipe = {
  title: string,
  desc: string,
  prepTime: string,
  images: string[],
}
export default async function Home() {
  return (
    <>
      <main className="">
        <section className='flex gap-4'>
          <DailyRecipe />
          <Hero />
        </section>

        <div className='px-10'>
          <section className='mt-10 overflow-hidden'>
            <h2
              className='text-primary-base text-2xl'>
              Receitas em destaque
            </h2>
            <StarredRecipes />
            <p>alkdjakldjkla</p>
          </section>
        </div>

      </main>
    </>
  )
}