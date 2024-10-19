import classes from "@/components/about/about_image.module.css";

import Image from "next/image";

export default function AboutImage(props: {
  children?: React.ReactNode;
  src: string;
  alt: string;
  id: number;
}) {
  return (
    <div className={classes.image} >
      <Image
        src={`/assets/${props.src}`}
        alt={props.alt}
        priority
        height="182"
        width="370"
      ></Image>
    </div>
  );
}
