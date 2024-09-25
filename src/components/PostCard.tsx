import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

function PostCard({post, catSlug}:any) {
    // let bg= post.node.featuredImage
    // style={{ backgroundImage: `url(${bg})` }}
  return (
        <Card>
        <CardHeader className="h-[180px] mb-4 bg-no-repeat bg-cover bg-center rounded-t-lg" >
        </CardHeader>
        <CardContent>
            <h2 className='text-lg font-bold text-sprimary mb-3'>{post.node.title}</h2>
            <div className='line-clamp-3 text-foreground text-lg [&_h2]:hidden' dangerouslySetInnerHTML={{__html:post.node.content}}></div>
        </CardContent>
        <CardFooter>
            <Link href={`/cohorts/${catSlug}/${post.node.slug}`} className='inline-block orangeBtn w-[160px]'>View Cohort</Link>
        </CardFooter>
    </Card>
  )
}

export default PostCard