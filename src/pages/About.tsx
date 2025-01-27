import React, { useState } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./global.css";

const About = () => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const handleMouseEnter = () => {
    setTriggerAnimation(true);
  };
  const handleAnimationEnd = () => {
    setTriggerAnimation(false);
  };

  return (
    <>
      <div className="w-full pt-[5%] pr-[10%] xs:pr-0 sm:pr-0 flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-12">
        <div className="w-full overflow-hidden max-h-[300px] sm:max-h-[430px] rounded-[4px]">
          <picture>
            <source srcSet={`${process.env.PUBLIC_URL}/julia_m.webp`} />{" "}
            {/*media="(min-width: 768px)" /> */}
            {/* <source srcSet={`${process.env.PUBLIC_URL}/julia_s.webp`} /> */}
            <img
              src="/julia_m.webp"
              alt="Hi! It me, Julia"
              className="w-full"
            />
          </picture>
        </div>

        <div className="w-full">
          <header
            className="font-semibold text-3xl pb-10 text-b group"
            onMouseEnter={handleMouseEnter}>
            I tell{" "}
            <p className="inline-block transition-all -mb-5 ">
              {Array.from("impactful stories").map((char, index) => (
                <span
                  key={index}
                  className={`inline-block ${
                    triggerAnimation && "animate-jump"
                  }`}
                  onAnimationEnd={handleAnimationEnd}
                  style={{
                    animationDelay: `${index * 0.006}s`, // Reduced delay for faster offsets
                    animationDuration: "0.3s", // Faster animation duration
                  }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </p>{" "}
            through digital media
          </header>

          <div className="font-thin">
            <p className="pb-5 text-[0.95rem]">
              Hi! I'm Julia. I have always been fascinated by different media
              and how they can be used to enhance stories. Through my
              professional and personal projects, I have explored many media
              forms, giving me a thorough overview of what can be done.
            </p>

            <p className="pb-0 text-[0.95rem]">
              After degrees in Journalism and Management of Arts and Culture, I
              realise the power of art, music, the written word, and emerging
              media to highlight important world issues. I am particularly
              interested in gender equality, climate change action, and access
              to education. It's when I get to combine these topics with
              creative storytelling that I do my best work.
            </p>

            <div className="flex flex-row space-x-1">
              <a
                href="https://www.linkedin.com/in/juliaoprzondek/"
                aria-label="Connect with me on LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}>
                <LinkedInIcon
                  sx={{
                    color: "rgba(41, 95, 209, 0.8)",
                    mt: 2,
                    width: "1.8rem",
                    height: "2.25rem",
                    mr: 0.5,
                    cursor: "pointer",
                    "&:hover": {
                      color: "rgba(41, 95, 209, 1)",
                      transition: "all 0.3s ease",
                    },
                  }}
                />
              </a>

              <a
                href="mailto:oprzondek.julia@gmail.com"
                aria-label="Drop me an email"
                style={{
                  display: "flex",
                  alignItems: "center",
                  textDecoration: "none",
                }}>
                <AlternateEmailIcon
                  sx={{
                    color: "rgba(41, 95, 209, 0.8)",
                    mt: 2,
                    width: "1.8rem",
                    height: "2.25rem",
                    cursor: "pointer",
                    "&:hover": {
                      color: "rgba(41, 95, 209, 1)",
                      transition: "all 0.3s ease",
                    },
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
