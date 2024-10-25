"use client";
import Image from "next/image";
import classes from "@/components//contact/contact.module.css";
import appleDots from "@/public/assets/Apple Dots.svg";
import messageVector from "@/public/assets/Vector.svg";
import messageVector2 from "@/public/assets/messageVector.svg";
import { useState } from "react";

export default function Contact() {
  const [showActiveImage, setShowActiveImage] = useState(false);


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
              <h2>Let&apos;s talk</h2>
            </div>
            <p>
              Behind this profile too, is a person who love to connect, discuss
              ideas, sharing trip experiences, singing and south Indian food.
            </p>
            <p>
              Drop me an email, and let&apos;s schedule a meetup to explore how we
              can bring your ideas to life.
            </p>
            <form>
              <div>
                <label htmlFor="name">Full name</label>
                <input type="text" id="name" name="name" required></input>
              </div>
              <div>
                <label htmlFor="email">Email adress</label>
                <input type="email" id="email" name="email" required></input>
              </div>
              <div>
                <label htmlFor="your_message">Your message</label>
                <textarea
                  rows={5}
                  cols={5}
                  id="your_message"
                  name="your_message"
                  required
                ></textarea>
              </div>
              <div className={classes.radio_button}>
                <span>
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
              </div>
              <button
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
              </button>
            </form>
          </section>
        </main>
      </div>
    </>
  );
}
