import Hero from '@/components/Hero';
import React from 'react';


async function page({params}:any) {
    let title = params.orgsId;
    const slug = params.orgsId;
    const query =`
    query NewQuery($slug:ID!) {
      post(id:$slug, idType: SLUG) {
        id
        title
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        content
      }
    }`
    const variables = {
        slug,
    };
  const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next:{revalidate:60},
    body: JSON.stringify({ query, variables }),
  });
  const data = await res.json();
  let bg ='';
  if(data.data.post.featuredImage !== null){
    bg=data.data.post.featuredImage.node.mediaItemUrl;
  }
  return (
    <main>
        <Hero heroTitle={data.data.post.title} bg={bg}/>
        <article className="py-10">
          <section className="container">
            <div className="max-w-[1000px] font-mainFont mx-auto [&_h2]:text-3xl [&_h2]:mb-4 [&_h2]:mt-5 [&_h2]:text-sprimary [&_h2]:capitalize [&_h2]:font-bold [&_p]:mb-3 [&_p]:text-lg [&_iframe]:my-7 [&_iframe]:rounded-lg [&_iframe]:aspect-video [&_iframe]:w-full [&_a]:orangeBtn [&_a]:my-5 [&_a]:inline-block [&_a]:w-[180px]" dangerouslySetInnerHTML={{__html:data.data.post.content}}></div>
          </section>
        </article>
    </main>
  )
}

export default page