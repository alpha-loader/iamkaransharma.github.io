"use client";

import classes from "@/components/about/about_image.module.css";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AboutImage(props: {
  children?: React.ReactNode;
  src: string;
  alt: string;
  id: number;
  type: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  let position = props.type === "even" ? -30 : 30;
  return (
    <motion.div
      ref={ref}
      className={classes.image}
      initial={{ opacity: 0, x: position }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Image
        src={`/assets/${props.src}`}
        alt={props.alt}
        priority
        height="482"
        width="370"
      />
    </motion.div>
  );
}
