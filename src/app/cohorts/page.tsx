import CohortCard from '@/components/CohortCard';
import Hero from '@/components/Hero'
import React from 'react'

async function page() {
  const query = `
  {
  page:page(id: "cG9zdDoxMg==", idType: ID) {
    id
    slug
    title
    featuredImage {
      node {
        altText
        mediaItemUrl
      }
    }
    content
  }
  cats:categories {
    edges {
      node {
        id
        name
        slug
        categoriesFields {
          featuredImage {
            node {
              altText
              mediaItemUrl
            }
          }
        }
        description
      }
    }
  }
}
  `
  const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, { headers:{'Content-Type': 'application/json'}, cache:'no-store'})
  const pageData = await res.json();
  let title:String = pageData.data.page.title
  let bg:String = '';
  if(pageData.data.page.featuredImage !== null){
    bg=pageData.data.page.featuredImage.node.mediaItemUrl;
  }
  let categories = pageData.data.cats.edges;
  let finalCats = categories.filter((c: { node: { id: string } }) => c.node.id !== "dGVybTox");
  return (
    <main>
      <Hero heroTitle={title} bg={bg}/>
      <section className="py-8">
        <div className="container text-center [&_p]:max-w-[1000px] [&_p]:mx-auto [&_p]:text-lg font-mainFont text-foreground" dangerouslySetInnerHTML={{__html: pageData.data.page.content}}></div>
      </section>
      <section className="pt-4 pb-10">
        <article className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {finalCats.map((cohort:any)=><CohortCard key={cohort.node.id} data={cohort}/>)}
        </article>
      </section>
    </main>
  )
}

export default page