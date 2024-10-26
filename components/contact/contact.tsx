"use client";
import Image from "next/image";
import classes from "@/components//contact/contact.module.css";
import appleDots from "@/public/assets/Apple Dots.svg";
import messageVector from "@/public/assets/Vector.svg";
import messageVector2 from "@/public/assets/messageVector.svg";
import { useState } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Contact() {
  const [showActiveImage, setShowActiveImage] = useState(false);

  const h2Ref = useRef(null);
  const h2RefIsInView = useInView(h2Ref, { once: true });
  const paraOneRef = useRef(null);
  const paraOneRefIsInView = useInView(paraOneRef, { once: true });
  const paraTwoRef = useRef(null);
  const paraTwoRefIsInView = useInView(paraTwoRef, { once: true });
  const nameRef = useRef(null);
  const nameRefIsInView = useInView(nameRef, { once: true });
  const emailRef = useRef(null);
  const emailRefIsInView = useInView(emailRef, { once: true });
  const messageRef = useRef(null);
  const messageRefIsInView = useInView(messageRef, { once: true });
  const radioRef = useRef(null);
  const radioRefIsInView = useInView(radioRef, { once: true });
  const buttonRef = useRef(null);
  const buttonRefIsInView = useInView(buttonRef, { once: true });

  return (
    <>
      <div className={classes.header_gradient}>
        <main className={classes.header_gradient_main}>
          <div className={classes.sub_header_gradient}>
            <main className={classes.sub_header_gradient_main}>
              <Image src={appleDots} alt="Apple Dots" priority></Image>
            </main>
          </div>

          <section>
            <div className={classes.heading}>
              <motion.h2
                ref={h2Ref}
                initial={{ opacity: 0, x: -20 }}
                animate={h2RefIsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Let&apos;s talk
              </motion.h2>
            </div>

            <motion.p  ref={paraOneRef}
                initial={{ opacity: 0, y: 20 }}
                animate={paraOneRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}>
              Behind this profile too, is a person who love to connect, discuss
              ideas, sharing trip experiences, singing and south Indian food.
            </motion.p>

            <motion.p  ref={paraTwoRef}
                initial={{ opacity: 0, y: +20 }}
                animate={paraTwoRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}>
              Drop me an email, and let&apos;s schedule a meetup to explore how
              we can bring your ideas to life.
            </motion.p>

            <form>
              <motion.div  ref={nameRef}
                initial={{ opacity: 0, y: 20 }}
                animate={nameRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}>
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" required></input>
              </motion.div>

              <motion.div  ref={emailRef}
                initial={{ opacity: 0, y: 20 }}
                animate={emailRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}>
                <label htmlFor="email">Email adress</label>
                <input type="email" id="email" name="email" required></input>
              </motion.div>

              <motion.div  ref={messageRef}
                initial={{ opacity: 0, y: 20 }}
                animate={messageRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}>
                <label htmlFor="your_message">Your message</label>
                <textarea
                  rows={5}
                  cols={5}
                  id="your_message"
                  name="your_message"
                  required
                ></textarea>
              </motion.div >

              <motion.div  ref={radioRef}
                initial={{ opacity: 0, y: 20 }}
                animate={radioRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }} className={classes.radio_button}>
                <span >
                  <input
                    type="radio"
                    name="radio"
                    value="true"
                    id="share_resume"
                    required
                    style={{ accentColor: "rgb(55, 55, 55)" }}
                  ></input>
                  <label htmlFor="share_resume">Share resume</label>

                  <input
                    type="radio"
                    name="radio"
                    value="false"
                    required
                    id="not_sure"
                    style={{ accentColor: "rgb(55, 55, 55)" }}
                  ></input>
                  <label htmlFor="not_sure">Not sure</label>
                </span>
              </motion.div>
              <motion.button
               ref={buttonRef}
               initial={{ opacity: 0, y: 20 }}
               animate={buttonRefIsInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 1, ease: "easeOut" }}

                className={classes.form_button}
                onMouseOver={() => setShowActiveImage(true)}
                onMouseOut={() => setShowActiveImage(false)}
              >
                Send message
                <span className={classes.btn_image}>
                  {showActiveImage ? (
                    <Image src={messageVector2} alt="message"></Image>
                  ) : (
                    <Image src={messageVector} alt="message"></Image>
                  )}
                </span>
              </motion.button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}
