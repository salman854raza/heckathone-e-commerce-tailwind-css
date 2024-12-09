// import About from "@/components/about";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";

// import { EditorsPick } from '@/components/editors-pick/EditorsPick';
// import Pagetwo from "./components/Pagetwo";
// import Header from "./components/Header";

export default function Home() {
  return ( <div> 
    <Header/>
    <Navbar/> 
    <Hero/> 
    {/* <About/> */}
    {/* <EditorsPick /> */}
    <Footer/>


   </div>
  );
}
