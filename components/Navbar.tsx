import Link from "next/link";
import { Button } from "./button";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="max-w-3xl 
    w-full
    mx-auto px-4 
     py-6
     flex  justify-between

      align-baseline    

     ">

      <div className="mx-0 h-10">
          <Link href="/">
            <h1 className="text-2xl font-medium">
              Hassaan <span className="text-teal-500">Blog</span>
            </h1>
          </Link>
          </div>



      <div className="h-10">

        <ModeToggle/>
          </div>

    </div>
  );
}