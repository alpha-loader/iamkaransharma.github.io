"use client";

import classes from "@/components/skills/skills.module.css";
import Image from "next/image";
import vectorRectangle from "@/public/assets/Group 2.png";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import scrollSvg from "@/public/assets/scroll.svg";

const skillsData = {
  slills: [
    "React",
    "NodeJS",
    "MongoDB",
    "Express",
    "RestAPI",
    "Deno",
    "GraphQL",
    "PostgreSQL",
    "Python",
    "AWS",
    "Docker",
    "Kubernetes",
    "Kafka",
    "HTML",
    "CSS",
    "JavaScript",
  ],
  experienceBadge1: {
    year: "2021-22",
    heading: "Year 1: Mastering the Basics",
    content:
      "Focused on developing robust frontend interfaces using HTML, CSS, and JavaScript, building interactive web applications. Gained hands-on experience with React and integrated React Router to create seamless navigation in dynamic single-page apps. Applied responsive design principles to ensure cross-platform compatibility.",
  },
  experienceBadge2: {
    year: "2022-23",
    heading: "Year 2: Expanding Full-Stack Expertise",
    content:
      "Transitioned into full-stack development by incorporating Node.js and TypeScript into projects, while deepening skills in React Redux for state management. Built scalable, server-side logic, and designed RESTful APIs using Next.js. Integrated databases like PostgreSQL and MongoDB to ensure data persistence and optimized data structures for performance.",
  },
  experienceBadge3: {
    year: "2023-24",
    heading: "Year 3: Cloud and Containerization",
    content:
      "Deployed full-scale applications to AWS, focusing on scalable cloud architectures, while orchestrating containers using Docker and Kubernetes for streamlined development and deployment pipelines. Leveraged MUI and Framer for advanced UI/UX design, and utilized Python for backend automation and scripting solutions, ensuring end-to-end application delivery with a focus on efficiency and scalability.",
  },
};

export default function Skills() {
  const vectorRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(vectorRef, { once: true });

  const vectorImageRef = useRef<HTMLDivElement>(null);
  const vectorImageRefIsInView = useInView(vectorImageRef, { once: true });

  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const opacity = useTransform(scrollYProgress, [0, 0.01], [1, 0]);

  return (
    <>
      <div
        style={{
          border: "2px solid transparent",
          width: "100vw",
          height: "fit-content",
          margin: "auto",
          marginBottom: "0px",
          position: "relative",
        }}
      >
        <div className={classes.header_gradient}>
          <main className={classes.header_gradient_main} ref={scrollRef}>
            <div className={classes.main_heading}>
              <p className={classes.header_fade_out}>Skills & Experience</p>
            </div>

            <div className={classes.skills_section}>
              <p>Skills.</p>
              <h4>{skillsData.slills.map((item) => `${item} | `)}</h4>
            </div>

            <div className={classes.experience_section}>
              <p className={classes.experience_section}>Experience.</p>
              <div className={classes.experience}>
                <section
                  key={skillsData.experienceBadge1.year}
                  className={classes.inner_section}
                >
                  <h2 key={1}>{skillsData.experienceBadge1.year}</h2>
                  <h2 key={2}>{skillsData.experienceBadge1.heading}</h2>
                  <h4 key={3}>{skillsData.experienceBadge1.content}</h4>
                </section>

                <section
                  key={skillsData.experienceBadge2.year}
                  className={classes.inner_section}
                >
                  <h2 key={1}>{skillsData.experienceBadge2.year}</h2>
                  <h2 key={2}>{skillsData.experienceBadge2.heading}</h2>
                  <h4 key={3}>{skillsData.experienceBadge2.content}</h4>
                </section>

                <section
                  key={skillsData.experienceBadge3.year}
                  className={classes.inner_section}
                >
                  <h2 key={1}>{skillsData.experienceBadge3.year}</h2>
                  <h2 key={2}>{skillsData.experienceBadge3.heading}</h2>
                  <h4 key={3}>{skillsData.experienceBadge3.content}</h4>
                </section>
              </div>
            </div>
            <motion.div
            className={classes.vector_arrow}
              ref={vectorImageRef}
              initial={{ clipPath: "inset( 0 0 100% 0)" }}
              animate={
                vectorImageRefIsInView ? { clipPath: "inset(0 0 0 0)" } : {}
              }
              transition={{ duration: 1.2, ease: "easeOut", repeat: Infinity }}
              style={{
                position: "sticky",
                bottom: "2%",
                marginRight: "2%",
                alignSelf: "flex-end",
                opacity: opacity,
              }}
            >
              <Image
                src={scrollSvg}
                alt="Vector Graphics"
                priority
                height={50}
                width={30}
              ></Image>
            </motion.div>
          </main>
        </div>

        <motion.div
          ref={vectorRef}
          className={classes.vector}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={isInView ? { clipPath: "inset(0 0 0 0)" } : {}}
          transition={{ duration: 4, ease: "easeOut" }}
          style={{ overflow: "hidden" }}
        >
          <Image
            src={vectorRectangle}
            alt="Vector Graphics"
            priority
            fill
          ></Image>
        </motion.div>
      </div>
    </>
  );
}
