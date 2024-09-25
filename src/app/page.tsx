import HomeHero from "@/components/HomeHero";
import HomeSect from "@/components/HomeSect";
import Image from "next/image";

export default async function Home() {
      const query = ` {
  page(id: "cG9zdDoxMA==", idType: ID) {
    id
    title
    content
    uri
    slug
    featuredImage {
      node {
        mediaItemUrl
      }
    }
    homePage {
      sectionTitle {
        sectionImage {
          node {
            altText
            mediaItemUrl
          }
        }
        sectionTitle
        sectionVideo
        sectionContent
      }
    }
    homeTitle {
      customTitle
    }
  }
}`

let res = await fetch(`${process.env.WORDPRESS_API_URL}?query=${encodeURIComponent(query)}`, {headers: {'Content-Type': 'application/json'}, cache:'no-store'});

let pageData = await res.json();
let title:any = pageData.data.page.homeTitle.customTitle;
let hero:any =pageData.data.page.featuredImage.node.mediaItemUrl;
let subT:any =pageData.data.page.content;
let homeBlocks:any = pageData.data.page.homePage.sectionTitle
  return (
    <main>
      <HomeHero heroTitle={title} bg={hero} subT={subT}/>
      <section className="">
        {homeBlocks.map((homeBlock:any, index:any)=><HomeSect key={index} data={homeBlock}/>)}
        
      </section>
    </main>
  );
}
