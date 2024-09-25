  import Explore from '@/components/Explore'
import Hero from '@/components/Hero'
  import React from 'react'


  async function page() {
    const query = `
    {
  page(id: "cG9zdDoxNA==", idType: ID) {
    featuredImage {
      node {
        altText
        mediaItemUrl
      }
    }
    id
    slug
    title
    uri
    explorePage {
      exploreSections {
        sectionTitle
        sectionContent
        sectionImage {
          node {
            altText
            mediaItemUrl
          }
        }
        sectionVideo
        sectionLink
      }
    }
  }
}
    `

    const res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, {headers: {'Content-Type': 'application/json'}});
    const pageData = await res.json();
    let data = pageData.data.page;
    let bg = '';
    if(data.featuredImage !== null){
      bg=data.featuredImage.node.mediaItemUrl;
    }
    let blockList = data.explorePage.exploreSections;
    return (
      <main>
        <Hero heroTitle={data.title} bg={bg}/>
        <div>
        {blockList.map((list:any, i:any)=> <Explore key={i} value={list}/>)}
        </div>
      </main>
    )
  }

  export default page