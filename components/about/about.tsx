"use client";

import classes from "@/components/about/about.module.css";
import data from "@/lib/about";
import AboutText from "./about_text";
import AboutImage from "./about_image";
import React from "react";

export default function About() {
  return (
    <>
      <div className={classes.header_gradient}>
        <main className={classes.header_gradient_main}>
          <div className={classes.about_tags}>
            <p>my Journey</p>
          </div>

          <div className={classes.box}>
            <section className={classes.main_section}>
              <div className={classes.left_section} key="left_section">
                {data.map((objectData) => {
                  let odd: Boolean = true;
                  if (objectData.id % 2 === 0) {
                    odd = false;
                  }
                  return (
                    <React.Fragment key={objectData.id}>
                      {odd ? (
                        <AboutText
                          content={objectData.content
                            .map((str) => `<h4>${str}</h4>`)
                            .join("\n")}
                          id={objectData.id}
                        />
                      ) : (
                        <AboutImage
                          src={objectData.src}
                          alt={objectData.alt}
                          id={objectData.id}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              <div className={classes.mid_section} key="mid_section">
                {data.map((objectData) => {
                  if (objectData.id === 8) {
                    return (
                      <React.Fragment key={objectData.id}>
                        <div className={classes.dot}></div>
                        <div className={classes.line}></div>
                        <div className={classes.dot}></div>
                      </React.Fragment>
                    );
                  } else {
                    return (
                      <React.Fragment key={objectData.id}>
                        <div className={classes.dot}></div>
                        <div className={classes.line}></div>
                      </React.Fragment>
                    );
                  }
                })}
              </div>

              <div className={classes.right_section} key="right_section">
                {data.map((objectData) => {
                  let odd: Boolean = true;
                  if (objectData.id % 2 === 0) {
                    odd = false;
                  }
                  return (
                    <React.Fragment key={objectData.id}>
                      {odd ? (
                        <AboutImage
                          src={objectData.src}
                          alt={objectData.alt}
                          id={objectData.id}
                        />
                      ) : (
                        <AboutText
                          content={objectData.content
                            .map((str) => `<h4>${str}</h4>`)
                            .join("\n")}
                          id={objectData.id}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </section>
          </div>
          <div className={classes.about_tags}>
            <p>is in Progress...</p>
          </div>
        </main>
      </div>
    </>
  );
}
