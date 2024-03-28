// we need sanity client to fetch data from the server
// npm i next-sanity

import { createClient } from "next-sanity";
import ImageUrlBuilder  from "@sanity/image-url";

export const client = createClient({
    apiVersion : "2022-03-07",
    dataset : 'production',
    projectId : "s4m6osk6",
    useCdn : false
}) 


//convert image to urrl 

const builder = ImageUrlBuilder(client)

export function urlFor(source : any){
    return builder.image(source)
}