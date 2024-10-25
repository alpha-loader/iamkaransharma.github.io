
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
              <p>Hi. I&apos;m Name.</p>
              <p>{`A <Fullstack />`}</p>
              <p>Developer.</p>
            </div>
            <section>
              <h3>
              &quot;Great things in business are never done by one person. They&lsquo;re
                done by a team of people&quot;
              </h3>
              <h3 className={classes.author}>&#x2022; Steve Jobs</h3>
            </section>
            <Image
              src={signature}
              alt="Signature"
              priority
              className={classes.signature}
            
            ></Image>
          </span>
          <span className={classes.hero_image}>
            <Image
              src={heroImage}
              alt="Hero Image"
              priority
            ></Image>
          </span>
        </main>
      </div>
    </>
  );
}
