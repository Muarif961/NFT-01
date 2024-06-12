import Image from "next/image";
import Nav from "../app/Components/Navbar/page"
import Header from "../app/Components/Navbar/Header/page"
import Top from "../app/Components/Top-section/page"
import Latest from "../app/Components/Latest/page"
import Minted from "../app/Components/Minted/page"
import Recent from "../app/Components/Recent/page"
import Footer from "../app/Components/Footer/page"






export default function Home() {
  return (
   <>
   <Nav/>
   <Header/>
   <Top/>
   <Latest/>
   <Recent/>
   <Minted/>
   <Footer/>
   </>
  );
}
