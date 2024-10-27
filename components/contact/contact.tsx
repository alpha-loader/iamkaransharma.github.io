"use client";
import Image from "next/image";
import classes from "@/components//contact/contact.module.css";
import appleDots from "@/public/assets/Apple Dots.svg";
import messageVector from "@/public/assets/Vector.svg";
import messageVector2 from "@/public/assets/messageVector.svg";
import { useState } from "react";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "emailjs-com";
import Alert from "@/components/alert/alert";

export default function Contact() {
  const [showActiveImage, setShowActiveImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mailTrigger, setMailTrigger] = useState("");

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

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());
    console.log(formData);

    try {
      setLoading(true);

      emailjs.init(`${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_API}`);
      emailjs
        .send(
          `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
          `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
          {
            from_name: formData.name,
            to_name: "Karu",
            message: formData.your_message,
            reply_to: "education.karu@gmail.com",
            send_resume: formData.send_resume === "true"
              ? "Please send your resume."
              : "I'm not sure about you sending your resume.",
            email: formData.email,
          }
        )

        .then((result) => {
          setLoading(false);
          setMailTrigger("success");
          setTimeout(() => setMailTrigger(""), 2000);
        })
        .catch((error) => {
          setLoading(false);
          setMailTrigger("failed");
          setTimeout(() => setMailTrigger(""), 2000);
        });
    } catch (error) {
      console.log(error);
      setLoading(false);
      setMailTrigger("failed");
      setTimeout(() => setMailTrigger(""), 2000);
    }
  };

  return (
    <>
      <div className={classes.header_gradient} id="contact">
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

            <motion.p
              ref={paraOneRef}
              initial={{ opacity: 0, y: 20 }}
              animate={paraOneRefIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Behind this profile too, is a person who love to connect, discuss
              ideas, sharing trip experiences, singing and south Indian food.
            </motion.p>

            <motion.p
              ref={paraTwoRef}
              initial={{ opacity: 0, y: +20 }}
              animate={paraTwoRefIsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              Drop me an email, and let&apos;s schedule a meetup to explore how
              we can bring your ideas to life.
            </motion.p>

            <form onSubmit={handleSubmit}>
              <motion.div
                ref={nameRef}
                initial={{ opacity: 0, y: 20 }}
                animate={nameRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" required></input>
              </motion.div>

              <motion.div
                ref={emailRef}
                initial={{ opacity: 0, y: 20 }}
                animate={emailRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <label htmlFor="email">Email adress</label>
                <input type="email" id="email" name="email" required></input>
              </motion.div>

              <motion.div
                ref={messageRef}
                initial={{ opacity: 0, y: 20 }}
                animate={messageRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <label htmlFor="your_message">Your message</label>
                <textarea
                  rows={5}
                  cols={5}
                  id="your_message"
                  name="your_message"
                  required
                ></textarea>
              </motion.div>

              <motion.div
                ref={radioRef}
                initial={{ opacity: 0, y: 20 }}
                animate={radioRefIsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}
                className={classes.radio_button}
              >
                <span>
                  <input
                    type="radio"
                    name="send_resume"
                    value="true"
                    id="share_resume"
                    required
                    style={{ accentColor: "rgb(55, 55, 55)" }}
                  ></input>
                  <label htmlFor="share_resume">Share resume</label>

                  <input
                    type="radio"
                    name="send_resume"
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
                disabled={loading}
              >
                {loading ? "Sending..." : "Send message"}
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
      {mailTrigger === "success" ? (
        <Alert text="Thank you for your message 😃" type="success"></Alert>
      ) : mailTrigger === "failed" ? (
        <Alert text="I didn't receive your message 😢" type="danger"></Alert>
      ) : (
        ""
      )}
    </>
  );
}
