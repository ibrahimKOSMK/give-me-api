import Image from "next/image";
import Hero from "./_components/Hero";
import Blogs from "./_components/Blogs";
import Ads from "./_components/Ads"
export default function Home() {
  return (
    <main>
      <dev>
        <Hero/>
        <nav className=' text-right text-5xl font-sans font-bold bg-red-400 rounded-md ml-64 mb-2 hover:bg-red-900 hover:text-gray-400 pb-5 '>اخر الاخبار يا زميلي </nav>
      <Blogs/>
      <Ads/>
      </dev>


    </main>
  );
}
