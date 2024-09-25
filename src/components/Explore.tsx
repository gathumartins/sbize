import React from 'react'
import Link from 'next/link'

function Explore({value}:any) {
  return (
    <section className="bg-sgray even:bg-white py-8 group">
        <article className="container flex flex-col md:flex-row place-items-center md:group-even:flex-row-reverse gap-10">
        <div className="w-full md:w-1/2 md:group-even:w-2/3 [&_p]:font-normal [&_p]:text-lg [&_p]:text-foreground">
            <h2 className="after:content-[''] after:top-8 after:left-0 after:w-[180px] after:rounded after:h-[5px] after:bg-sorange relative after:absolute mb-8 text-2xl font-bold text-sdarkblue capitalize">{value.sectionTitle}</h2>
            <div dangerouslySetInnerHTML={{__html:value.sectionContent}}></div>
            {value.sectionLink !== null &&(
              <Link href={value.sectionLink} className="orangeBtn w-[180px] inline-block mt-7" target='_blank'>Explore More</Link>
            )}
        </div>

        {value.sectionVideo !== null &&(
          <div className="group-even:hidden flex-grow w-full md:w-3/4">
            <iframe allow='fullscreen' className="w-full aspect-video rounded-lg" src={value.sectionVideo}></iframe>
          </div>
        )}
        {value.sectionImage !== null &&(
          <figure className="group-odd:hidden w-full md:w-3/4">
            <img src={value.sectionImage.node.mediaItemUrl} alt="Explore Kenya" className='rounded-md shadow-lg'/>
        </figure>
        )}
        </article>
    </section>
  )
}

export default Explore 