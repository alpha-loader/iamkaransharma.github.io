import classes from "@/components/footer/footer.module.css";
import linkedin from "@/public/assets/linkedin.svg" 
import gitHub from "@/public/assets/gitHub.svg"
import x from "@/public/assets/x.svg"
import discord from "@/public/assets/discord.svg"

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className={classes.footer}>
        <div className={classes.social_media}>
            <Link href="https://www.google.com"><Image src={linkedin} alt="image" priority /></Link>
              <Link href="https://www.google.com"><Image src={gitHub} alt="image" priority /></Link>
              <Link href="https://www.google.com"><Image src={x} alt="image" priority /></Link>
              <Link href="https://www.google.com"><Image src={discord} alt="image" priority /></Link>
        </div>
        <div className={classes.footer_copyright}>
          <p>© 2024 Karan Sharma. All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
