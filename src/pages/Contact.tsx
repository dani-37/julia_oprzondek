import React, { useState } from "react";
import "./global.css";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import FileOpenIcon from "@mui/icons-material/FileOpen";

const getRandomDirection = () => {
  const randomValue = () => `${Math.random() * 8 - 5}px`;
  return { "--x": randomValue(), "--y": randomValue() };
};

const ContactItem = ({
  text,
  img,
  link,
}: {
  text: string;
  img: any;
  link: string;
}) => {
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const handleMouseEnter = () => {
    setTriggerAnimation(true);
  };
  const handleAnimationEnd = () => {
    setTriggerAnimation(false);
  };

  return (
    <div className="container mx-auto flex items-center pt-12">
      <a
        href={link}
        aria-label="Drop me an email"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
        }}
        onMouseEnter={handleMouseEnter}>
        {img}
        <header
          className={`  text-[1.2rem] sm:text-[1.65rem] text-white cursor-pointer hover-wave ${
            triggerAnimation ? "animate-shake" : ""
          }`}
          onAnimationEnd={handleAnimationEnd}>
          {text.split("").map((char, index) => (
            <span
              key={index}
              style={getRandomDirection() as React.CSSProperties}>
              {char}
            </span>
          ))}
        </header>
      </a>
    </div>
  );
};

const Contact = () => {
  return (
    <>
      <header className="sm:pt-24 pt-16   font-bold text-4xl text-white">
        Contact
      </header>

      <ContactItem
        text="oprzondek.julia@gmail.com"
        link="mailto:oprzondek.julia@gmail.com"
        img={
          <AlternateEmailIcon
            sx={{
              color: "white",
              mr: 3,
              width: "1.8rem",
              height: "2.25rem",
              cursor: "pointer",
            }}
          />
        }
      />

      <ContactItem
        text="julia_oprzondek"
        link="https://www.linkedin.com/in/juliaoprzondek/"
        img={
          <LinkedInIcon
            sx={{
              color: "white",
              mr: 3,
              width: "1.8rem",
              height: "2.25rem",
              cursor: "pointer",
            }}
          />
        }
      />

      <ContactItem
        text="cv.pdf"
        link={`${process.env.PUBLIC_URL}/JuliaOprzondek_CV.pdf`}
        img={
          <FileOpenIcon
            sx={{
              color: "white",
              mr: 3,
              width: "1.8rem",
              height: "2.25rem",
              cursor: "pointer",
            }}
          />
        }
      />
    </>
  );
};

export default Contact;
