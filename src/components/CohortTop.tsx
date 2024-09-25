import React from 'react'

function CohortTop({data}:any) {

  return (
    <section className="bg-sgray even:bg-white pt-8 group">
        <article className="container flex flex-col md:flex-row-reverse place-items-center gap-10">
        <div className="w-full md:w-1/2 [&_p]:font-normal [&_p]:text-lg [&_p]:text-foreground">
            <h2 className="after:content-[''] after:top-8 after:left-0 after:w-[180px] after:rounded after:h-[5px] after:bg-sorange relative after:absolute mb-8 text-3xl font-bold text-sprimary capitalize">Explore the centers</h2>
            <div dangerouslySetInnerHTML={{__html:data.description}} className="text-lg text-foreground font-mainFont"></div>
        </div>
        {data.categoriesFields.categoryVideo!== null &&(
            <div className="flex-grow w-full md:w-1/2">
                <iframe allow='fullscreen' className="w-full aspect-video rounded-lg" src={data.categoriesFields.categoryVideo}></iframe>
            </div>
        )}
        </article>
    </section>
  )
}

export default CohortTop