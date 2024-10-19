import classes from "@/components/header/header.module.css";
import Image from "next/image";
import signature from "@/public/assets/signature.svg";
import heroImage from "@/public/assets/heroImage.png";

export default function Header() {
  return (
    <>
      <div className={classes.header_gradient}>
        <main className={classes.header_gradient_main}>
          <span className={classes.hero_content}>
            <div>
              <p>Hi. I’m Name.</p>
              <p>{`A <Fullstack />`}</p>
              <p>Developer.</p>
            </div>
            <section>
              <h3>
                "Great things in business are never done by one person. They're
                done by a team of people”
              </h3>
              <h3 className={classes.author}>&#x2022; Steve Jobs</h3>
            </section>
            <Image
              src={signature}
              alt="Signature"
              priority
              className={classes.signature}
              height="113"
              width="218"
            ></Image>
          </span>
          <span className={classes.hero_image}>
            <Image
              src={heroImage}
              alt="Hero Image"
              priority
              height='666'
              width='511'
            ></Image>
          </span>
        </main>
      </div>
    </>
  );
}
