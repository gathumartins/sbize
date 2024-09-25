import CohortTop from '@/components/CohortTop';
import Hero from '@/components/Hero'
import HomeSect from '@/components/HomeSect';
import PostCard from '@/components/PostCard';
import React from 'react'

async function page({params}:any) {
    const slug = params.cohortId;
    const query =`
    query NewQuery($slug:ID!) {
          cat:category(id:$slug, idType: SLUG) {
            id
            name
            description
            slug
            posts {
            edges {
              node {
                id
                slug
                title
                content
                featuredImage {
                  node {
                    altText
                    mediaItemUrl
                  }
                }
              }
            }
          }
            categoriesFields {
            heroImage {
                node {
                mediaItemUrl
                }
            }
            categoryVideo
            }
        }
    } `;
    const variables = {
        slug,
    };
  const res = await fetch(`${process.env.WORDPRESS_API_URL}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    next: { revalidate: 60 },
    body: JSON.stringify({ query, variables }),
  });
  const data = await res.json();
  let title = data.data.cat.name;
  let hero = data.data.cat.categoriesFields.heroImage.node.mediaItemUrl;
  let posts =data.data.cat.posts.edges;
  let topData=data.data.cat;
  return (
    <main>
      <Hero heroTitle={title} bg={hero}/>
      <CohortTop data={topData}/>
      <section className="py-10">
        <article className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {posts.map((post:any)=><PostCard post={post} key={post.node.id} catSlug={slug}/>)}
        </article>
      </section>
    </main>
  )
}

export default page