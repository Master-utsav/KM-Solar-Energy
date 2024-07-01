import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SubHeader from "@/components/SubHeader";
import SubHeader2 from "@/components/SubHeader2";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import OurServices from "@/components/OurServices";
import SolarKit from "@/components/SolarKit";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="w-[100vw] h-[100vh] bg-custom-gradient overflow-x-hidden relative scroll-smooth">
      <Navbar/>
      <Header/>
      <SubHeader/>
      <SubHeader2/>
      <WhyChooseUs/>
      <SolarKit/>
      <OurServices/>
      <About/>
      <Footer/>
    </main>

  );
}
