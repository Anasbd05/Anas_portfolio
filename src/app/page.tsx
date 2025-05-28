import About from "@/components/About";
import Contact from "@/components/Contact";
import {Footer} from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";
import Services from "@/components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
