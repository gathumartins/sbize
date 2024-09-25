import React from 'react'

function Hero({heroTitle, bg}:any) {
  return (
       <article className="font-mainFont bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
        <section className="bg-black/40">
            <div className="container flex flex-col justify-center place-items-center h-dvh">
            <div className="min-w-[300px] border-sorange border-x-4 px-6">
              <h1 className='text-6xl font-bold text-center text-white capitalize'>{heroTitle}</h1> 
            </div>
        </div>
        </section>
    </article>
  )
}

export default Hero