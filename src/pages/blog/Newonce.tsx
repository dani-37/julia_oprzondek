import React from "react";
import BlogPost from "./Template.tsx";

import "./blog.css";

import a1_s from "./images/newonce/a1_s.webp";
import a1_m from "./images/newonce/a1_m.webp";
import a1_l from "./images/newonce/a1_l.webp";

import a2_s from "./images/newonce/a2_s.webp";
import a2_m from "./images/newonce/a2_m.webp";
import a2_l from "./images/newonce/a2_l.webp";

import b1_s from "./images/newonce/b1_s.webp";
import b1_m from "./images/newonce/b1_m.webp";
import b1_l from "./images/newonce/b1_l.webp";

import b2_s from "./images/newonce/b2_s.webp";
import b2_m from "./images/newonce/b2_m.webp";
import b2_l from "./images/newonce/b2_l.webp";

import mp3 from "./images/newonce/jingle_newonce.mp3";

const Content = () => (
  <div className="mt-5 max-w-[100%] mx-auto">
    <div className="flex justify-center pb-2">
      <audio src={mp3} controls />
    </div>

    <div className="flex sm:flex-row flex-col items-center justify-center sm:space-x-5 space-y-5 sm:space-y-0 mb-5 mt-2">
      <picture>
        <source srcSet={a1_l} media="(min-width: 900px)" />
        <source srcSet={a1_m} media="(min-width: 500px)" />
        <source srcSet={a1_s} media="(max-width: 499px)" />
        <img
          src={a1_m}
          alt="Example 1 of newonce projects"
          className="w-full rounded-[4px]"
        />
      </picture>

      <picture>
        <source srcSet={a2_l} media="(min-width: 900px)" />
        <source srcSet={a2_m} media="(min-width: 500px)" />
        <source srcSet={a2_s} media="(max-width: 499px)" />
        <img
          src={a2_m}
          alt="Example 2 of newonce projects"
          className="w-full rounded-[4px]"
        />
      </picture>
    </div>

    <div className="flex sm:flex-row flex-col items-center justify-center sm:space-x-5 space-y-5 sm:space-y-0 mb-5 mt-2">
      {/* <img src={b1} className="max-w-[80%] rounded-[4px]" alt='Example 3 of newonce projects'/> */}
      <picture>
        <source srcSet={b1_l} media="(min-width: 900px)" />
        <source srcSet={b1_m} media="(min-width: 500px)" />
        <source srcSet={b1_s} media="(max-width: 499px)" />
        <img
          src={b1_m}
          alt="Example 3 of newonce projects"
          className="w-full rounded-[4px]"
        />
      </picture>

      <picture>
        <source srcSet={b2_l} media="(min-width: 900px)" />
        <source srcSet={b2_m} media="(min-width: 500px)" />
        <source srcSet={b2_s} media="(max-width: 499px)" />
        <img
          src={b2_m}
          alt="Example 4 of newonce projects"
          className="w-full rounded-[4px]"
        />
      </picture>
    </div>
  </div>
);

const Description = () => (
  <>
    <p className="  font-thin text-sm">
      newonce is a media platform born out of an organic passion for urban
      culture. It documents and comments on the surrounding reality and social
      dynamics through the prism of pop culture or lifestyle.
    </p>
    <p className="  font-thin text-sm">
      I worked in their department overlooking newonce.club, its subscription
      service. Apart from my work on branded communications, collaborations with
      external partners, and managing the club’s community, I got to do some ad
      hoc, unexpected projects like recording a promotional jingle for the
      radio. You can listen to it and see some of the promotional materials I
      worked on below - sorry it’s in Polish!
    </p>
  </>
);

const Drag = () => {
  return (
    <BlogPost
      title="newonce"
      description={<Description />}
      image="newonce"
      content={<Content />}
    />
  );
};

export default Drag;
