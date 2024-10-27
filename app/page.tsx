"use client";
import Header from "@/components/header/header";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import HowCanIHelpYou from "@/components/help/help";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import { motion, useScroll, useSpring } from "framer-motion";
import classes from "./page.module.css";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div
        className={classes.progress_bar}
        style={{ scaleX }}
      ></motion.div>
      <Header />
      <About />
      <Skills />
      <HowCanIHelpYou />
      <Contact />
      <Footer />
    </div>
  );
}
