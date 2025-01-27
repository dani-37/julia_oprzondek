import React from "react";
import { useInView } from "react-intersection-observer";
import "./global.css";

import embassy_s from "./images/embassy_s.webp";
import embassy_m from "./images/embassy_m.webp";

import newonce_s from "./images/newonce_s.webp";
import newonce_m from "./images/newonce_m.webp";

import goremote_s from "./images/goremote_s.webp";
import goremote_m from "./images/goremote_m.webp";

import penguin_s from "./images/penguin_s.webp";
import penguin_m from "./images/penguin_m.webp";

import t2_s from "./images/t2_s.webp";

type ThingProps = {
  intro: string | any;
  title: string;
  description: string | any;
  image: string[];
  last?: boolean;
};

const Thing: React.FC<ThingProps> = ({
  intro,
  title,
  description,
  image,
  last = false,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.35,
  });

  return (
    <div
      ref={ref}
      className={`${
        last ? "pb-0" : "pb-10"
      } ml-3 flex flex-col md:flex-row items-center transition-all duration-700 ${
        inView ? "translate-y-0" : "translate-y-10 opacity-0"
      }`}>
      <div className="flex flex-col items-start md:w-1/2">
        <div className="absolute -left-[19px] mt-1 w-3 h-3 border-2 border-[#3E5760] rounded-full bg-w z-20" />
        <div className="ml-8">
          <div className="text-md font-bold text-b pb-4"> {intro} </div>
          <h3 className="text-[1.5rem] md:text-[1.7rem]  text-gray-800 leading-snug md:max-w-[35vw]">
            {" "}
            {title}{" "}
          </h3>
          <div
            className={` text-[0.85rem] mt-3  md:max-w-[30vw] font-thin ${
              last ? "pb-0" : "pb-10 md:pb-16"
            }`}>
            {" "}
            {description}{" "}
          </div>
        </div>
      </div>
      <div className="hidden md:flex md:w-1/2">
        <picture>
          <source srcSet={image[1]} media="(min-width: 768px)" />
          <source srcSet={image[0]} media="(max-width: 767px)" />
          <img
            src={image[1]}
            alt={title}
            className="object-cover h-full w-[100%] pl-20"
          />
        </picture>
      </div>
    </div>
  );
};

const Experience = () => {
  return (
    <>
      <div className="container lg:mx-auto pr-[10%] sm:pr-0">
        <header className="sm:pt-24 pt-16 pb-10 font-bold text-4xl text-gray-800">
          Experience
        </header>
        <div className="relative border-l-[2px] ml-[5.8px] border-gray-200">
          <div className="absolute -left-[5px] -mt-1 w-3 h-3 border-2 border-w rounded-full bg-w z-1" />
          <Thing
            intro={
              <h4 className="text-md bold text-b pb-4">
                {" "}
                <a href="https://t2.world/">t2.world</a>, 2024{" "}
              </h4>
            }
            title="Marketing Associate"
            description="t2 is an online publishing platform for emerging writers. 
                        I was responsible for its PR, marketing, and branding, as well as highlighting quality 
                        articles, running community competitions, and retention of our users. It was another experience which showed 
                        me that every word matters, and nuances can make or break a message."
            image={[t2_s, t2_s]}
          />

          <Thing
            intro="Polish Embassy in London, 2023-2024"
            title="Media and Public Diplomacy Specialist"
            description="In my work at the Polish Embassy, I curated, scheduled, and produced content, including 
                        written and video formats, all with our target audience of 700,000 Poles based in the UK in mind."
            image={[embassy_s, embassy_m]}
          />

          <Thing
            intro="newonce, 2021-2022"
            title="CRM & Communications Assistant"
            description="AAt newonce, I worked closely on acquisition, winback, and retention email campaigns. In 
                        addition, I collaborated with Head of Subscriptions on external partners of newonce.club, managed the 
                        closed Facebook group for subscribers, and ran competitions for users."
            image={[newonce_s, newonce_m]}
          />

          <Thing
            intro="GoRemote, 2021-2022"
            title="Junior Production Assistant"
            description="GoRemote manages complex hybrid and virtual events. Its goal is to implement 
                        more efficient, collaborative, and intelligent event management. I assisted events such 
                        as ChangeNOW (sustainability conference), the Paris Peace Forum, and the FIBA (International 
                        Basketball Federation) Congress."
            image={[goremote_s, goremote_m]}
          />

          <Thing
            intro="Penguin Random House, 2019"
            title="Publicity and Marketing Intern"
            description="At Penguin, I interned at the Vintage imprint. It publishes thought-provoking, 
                        unforgettable, beautifully designed books, from contemporary trail-blazers to the red-spine classics."
            image={[penguin_s, penguin_m]}
            last={true}
          />
        </div>
      </div>
      <div className="h-[4rem] sm:h-[6rem]" />
    </>
  );
};

export default Experience;
