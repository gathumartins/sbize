import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"

function CohortCard({data}:any) {
    let bg = '';
    if(data.node.categoriesFields.featuredImage !== null){
      bg=data.node.categoriesFields.featuredImage.node.mediaItemUrl;
    }
  return (
    <Card className='shadow-xl'>
        <CardHeader className="h-[180px] mb-4 bg-no-repeat bg-cover bg-center rounded-t-lg" style={{ backgroundImage: `url(${bg})` }}>
        </CardHeader>
        <CardContent>
            <p className='line-clamp-3 text-foreground text-lg'>{data.node.description}</p>
        </CardContent>
        <CardFooter>
            <Link href={`/cohorts/${data.node.slug}`} className='inline-block orangeBtn'>View Cohort</Link>
        </CardFooter>
    </Card>
  )
}

export default CohortCard