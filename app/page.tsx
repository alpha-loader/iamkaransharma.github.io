import Header from "@/components/header/header";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import HowCanIHelpYou from "@/components/help/help";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import vectorRectangle from "@/public/assets/Group 2.png";


export default function Home() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <HowCanIHelpYou />
      <Contact />
      <Footer />
    </div>
  );
}
