"use client";

import classes from "@/components/header/header.module.css";
import Image from "next/image";
import signature from "@/public/assets/signature.svg";
import heroImage from "@/public/assets/heroImage.png";
import Typewriter from "typewriter-effect";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [stopWritingFirstPara, setStopWritingFirstPara] = useState(false);
  const [stopWritingSecondPara, setStopWritingSecondPara] = useState(false);
  const [stopWritingThirdPara, setStopWritingThirdPara] = useState(false);
  const [isNote, setIsNote] = useState(false);

  return (
    <>
      <div className={classes.header_gradient}>
        <main className={classes.header_gradient_main}>
          <span className={classes.hero_content}>
            <div className={classes.paragraphs}>
              {stopWritingFirstPara === true && (
                <div>
                  <span>Hi. I&apos;m Karan.</span>
                </div>
              )}
              {stopWritingFirstPara === false && (
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`Hi. I'm Karan.`)

                      .pauseFor(600)
                      .typeString(` (Karu)`)
                      .pauseFor(200)
                      .deleteChars(7)
                      .callFunction(() => {
                        setStopWritingFirstPara(true);
                      })
                      .start();
                  }}
                  options={{
                    autoStart: true,
                    loop: false,
                    delay: 80,
                    cursor: "|",

                    deleteSpeed: 50,
                  }}
                />
              )}

              {stopWritingSecondPara === true && (
                <div>
                  <span>{`A <FullStack/>`}</span>
                </div>
              )}

              {stopWritingSecondPara === false &&
                stopWritingFirstPara === true && (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString("A React")
                        .pauseFor(200)
                        .deleteChars(5)
                        // .typeString("act-Native")
                        // .pauseFor(100)
                        // .deleteChars(12)
                        .typeString("Node.js")
                        .pauseFor(200)
                        .deleteChars(7)
                        // .typeString("Next.js")
                        // .pauseFor(100)
                        // .deleteChars(7)
                        .typeString("DevOps Eng.")
                        .pauseFor(200)
                        .deleteChars(11)
                        .typeString(
                          "<span>&lt;<span>FullStack/<span>&gt;<span>"
                        )
                        .callFunction(() => {
                          setStopWritingSecondPara(true);
                        })
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: false,
                      delay: 40,
                      cursor: "|",
                      deleteSpeed: 20,
                    }}
                  />
                )}

              {stopWritingThirdPara === true && (
                <div>
                  <span>{`Developer.`}</span>
                </div>
              )}
              {stopWritingFirstPara === true &&
                stopWritingSecondPara === true &&
                stopWritingThirdPara === false && (
                  <Typewriter
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(`Developer.`)
                        .pauseFor(400)
                        .callFunction(() => {
                          setStopWritingThirdPara(true);
                        })
                        .start();
                    }}
                    options={{
                      autoStart: true,
                      loop: false,
                      delay: 75,
                      cursor: "|",

                      deleteSpeed: 30,
                    }}
                  />
                )}
            </div>

            {stopWritingThirdPara === true && (
              <section>
                <motion.h3
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  &quot;Great things in business are never done by one person.
                  They&lsquo;re done by a team of people&quot;
                </motion.h3>
                <motion.h3
                  initial={{ y: +10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  onAnimationComplete={() => setIsNote(true)}
                  className={classes.author}
                >
                  &#x2022; Steve Jobs
                </motion.h3>
              </section>
            )}

            {isNote && (
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                animate={{ clipPath: "inset(0 0 0 0)" }}
                transition={{ duration: 8, ease: "easeOut" }}
                style={{ overflow: "hidden" }}
              >
                <Image
                  src={signature}
                  alt="Signature"
                  priority
                  className={classes.signature}
                />
              </motion.div>
            )}
          </span>
          <span className={classes.hero_image}>
            <Image src={heroImage} alt="Hero Image" priority></Image>
          </span>
        </main>
      </div>
    </>
  );
}
