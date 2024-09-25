import React from 'react'
import Link from 'next/link'

function HomeHero({heroTitle,bg, subT}:any) {
  return (
    <article className="font-mainFont bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <section className="bg-black/40">
            <div className="container flex flex-col justify-center place-items-center h-dvh">
            <div className='[&_p]:text-6xl [&_p]:font-bold [&_p]:text-center [&_p]:text-white' dangerouslySetInnerHTML={{__html:heroTitle}}></div>
            <div className="my-6 [&_p]:text-white [&_p]:text-center [&_p]:text-xl" dangerouslySetInnerHTML={{__html:subT}}></div>
            <Link href="/cohorts" className='orangeBtn max-w-[200px] mx-auto'>Meet The Cohorts</Link>
            
        </div>
        </section>
    </article>
  )
}

export default HomeHero