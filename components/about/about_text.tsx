'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import classes from "@/components/about/about_text.module.css";
export default function AboutText(props: {
  children?: React.ReactNode;
  content: string;
  id: number;
  type: string;
}) {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const position = props.type === "odd" ? -30 : 30;

  return (
    <motion.div
      ref={ref}
      className={classes.text}
      initial={{ opacity: 0, x: position }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  );
}
