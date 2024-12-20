// import About from "@/components/about";
import FeaturedPost from "@/components/FeaturedPost";
// import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/hero1";

// import { EditorsPick } from '@/components/editors-pick/EditorsPick';
// import Pagetwo from "./components/Pagetwo";
// import Header from "./components/Header";

export default function Home() {
  return ( <div> 
    <Header/>
    <Navbar/> 
    <Hero/> 
    <FeaturedPost/>
    {/* <About/> */}
    {/* <EditorsPick /> */}
    {/* <Footer/> */}


   </div>
  );
}
