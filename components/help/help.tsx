"use client";
import classes from "@/components/help/help.module.css";
import Image from "next/image";
import lowerBracket from "@/public/assets/Lower Bracket.svg";
import upperBracket from "@/public/assets/Upper Bracket.svg";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Help() {
  const upperVectorRef = useRef(null);
  const upperVectorRefIsInView = useInView(upperVectorRef, { once: true });

  const paraOneRef = useRef(null);
  const paraOneRefIsInView = useInView(paraOneRef, { once: true });
  const paraTwoRef = useRef(null);
  const paraTwoRefIsInView = useInView(paraTwoRef, { once: true });
  const paraThreeRef = useRef(null);
  const paraThreeRefIsInView = useInView(paraThreeRef, { once: true });
  const paraFourRef = useRef(null);
  const paraFourRefIsInView = useInView(paraFourRef, { once: true });
  const buttonRef = useRef(null);
  const buttonRefIsInView = useInView(buttonRef, { once: true });

  const lowerVectorRef = useRef(null);
  const lowerVectorRefIsInView = useInView(lowerVectorRef, { once: true });

  return (
    <>
      <div className={classes.outer_box}>
        <motion.div
          ref={upperVectorRef}
          initial={{ opacity: 0, y: -20 }}
          animate={upperVectorRefIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className={classes.up_vector}
        >
          <Image src={upperBracket} alt="Vector Graphics" priority fill></Image>
        </motion.div>
        <div className={classes.header_gradient}>
          <main className={classes.header_gradient_main}>
            <div className={classes.main_heading}>
              <p>How Can I Help You?</p>
              <div className={classes.underline}></div>
            </div>
            <section className={classes.help_text}>
              <motion.p
                ref={paraOneRef}
                initial={{ opacity: 0, y: +20 }}
                animate={paraOneRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Listen, if you’re looking for someone who’s not just another
                “tech guy” but a <em>real builder</em>, then you’ve found your
                answer right here. I’m not just talking about a guy who can
                code. I’m talking about someone who’s built{" "}
                <span style={{ color: "#43F09F" }}>real applications</span> from
                the ground up—using the full{" "}
                <span style={{ color: "#43F09F" }}>MERN Stack</span>, deploying
                on <span style={{ color: "#43F09F" }}>AWS</span>, orchestrating
                with <span style={{ color: "#43F09F" }}>Docker</span> and{" "}
                <span style={{ color: "#43F09F" }}>Kubernetes</span>, and making
                it all scalable. We’re talking{" "}
                <span style={{ color: "#43F09F" }}>Python</span>,{" "}
                <span style={{ color: "#43F09F" }}>JavaScript</span>, the whole
                backend, frontend magic with{" "}
                <span style={{ color: "#43F09F" }}>HTML, CSS, MUI,</span> and
                even slick, modern design tools like{" "}
                <span style={{ color: "#43F09F" }}>Framer</span>.
              </motion.p>
              <motion.p
                ref={paraTwoRef}
                initial={{ opacity: 0, y: +20 }}
                animate={paraTwoRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                This isn’t about just completing projects—this is about creating{" "}
                <span style={{ color: "#43F09F" }}>impact</span>. Every app,
                every solution, has been built with precision, passion, and
                purpose. Whether you need someone who can optimize your cloud
                infrastructure, design seamless interfaces, or scale your
                database with <span style={{ color: "#43F09F" }}>MySQL</span>
                —I’ve done it all.
              </motion.p>
              <motion.p
                ref={paraThreeRef}
                initial={{ opacity: 0, y: +20 }}
                animate={paraThreeRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Now, I’m figuring out how to leverage all of this to work for
                something{" "}
                <span style={{ color: "#43F09F" }}>bigger than myself</span>. If
                you’ve got a great cause, an inspiring vision, or even just a
                problem that’s worth solving—I want to be part of it. Let’s not
                just build great applications, let’s create something that
                actually matters.
              </motion.p>
              <motion.p
                ref={paraFourRef}
                initial={{ opacity: 0, y: +20 }}
                animate={paraFourRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <span style={{ color: "#43F09F" }}>I’m In.</span>
              </motion.p>
              <motion.button
                ref={buttonRef}
                initial={{ opacity: 0, y: +20 }}
                animate={buttonRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className={classes.main_btn}
              >
                Drop an email
              </motion.button>
            </section>
          </main>
        </div>
        <motion.div
          ref={lowerVectorRef}
          initial={{ opacity: 0, y: 20 }}
          animate={lowerVectorRefIsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className={classes.down_vector}
        >
          <Image src={lowerBracket} alt="Vector Graphics" priority fill></Image>
        </motion.div>
      </div>
    </>
  );
}
