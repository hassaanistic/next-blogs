import { Card, CardContent } from "@/components/ui/card";
import { simpleBlogCard } from "./interface";
import { client, urlFor } from "./sanity";
import Image from "next/image";
import { Button } from "@/components/button";
import Link from "next/link";

export const revalidate = 30; // revalidate at most 30 seconds
// This thing need to learn and it is very important


async function getData (){
  const query = `
  *[_type=='blog'] | order(_createdAt desc){
    title,
    overview,
    titleImage,
      "currentSlug": slug.current
  }
  
  `

  const data  = await client.fetch(query)

  return data;
   
  
}
export default async function Home() {

  // const props  = await getData();
  // console.log("props======={}" , props.props.data)

  const data : simpleBlogCard[] = await getData();
  // we add [] because we are getting data as an array although remember the interface is like the object
  // console.log(data)

  return (
       <div className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5">
    {
      data.map((post : any , idx : any)=>(
        <Card key={idx}>
        <Image
          src={urlFor(post.titleImage).url()}
          alt="image"
          width={500}
          height={500}
          className="rounded-t-lg h-[200px] object-cover"
        />

        <CardContent className="mt-5">
          <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
          <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
            {post.overview}
          </p>
          <Button asChild className="w-full mt-7">
            <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
          </Button>
        </CardContent>
      </Card>
      ))
    }
  </div>
  );
}
