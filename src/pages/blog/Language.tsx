import React from "react";
import BlogPost from "./Template.tsx";
import "./blog.css";

import a1_s from "./images/language/a1_s.webp";
import a1_m from "./images/language/a1_m.webp";
import a1_l from "./images/language/a1_l.webp";

import a2_s from "./images/language/a2_s.webp";
import a2_m from "./images/language/a2_m.webp";
import a2_l from "./images/language/a2_l.webp";

import a3_s from "./images/language/a3_s.webp";
import a3_m from "./images/language/a3_m.webp";
import a3_l from "./images/language/a3_l.webp";

import b1_s from "./images/language/b1_s.webp";
import b1_m from "./images/language/b1_m.webp";
import b1_l from "./images/language/b1_l.webp";

import b2_s from "./images/language/b2_s.webp";
import b2_m from "./images/language/b2_m.webp";
import b2_l from "./images/language/b2_l.webp";

import b3_s from "./images/language/b3_s.webp";
import b3_m from "./images/language/b3_m.webp";
import b3_l from "./images/language/b3_l.webp";

import c1_s from "./images/language/c1_s.webp";
import c1_m from "./images/language/c1_m.webp";
import c1_l from "./images/language/c1_l.webp";

const Content = () => (
  <div className="mt-5 max-w-[100%] mx-auto">
    <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 justify-center items-center mb-5">
      <picture>
        <source srcSet={a1_l} media="(min-width: 900px)" />
        <source srcSet={a1_m} media="(min-width: 500px)" />
        <source srcSet={a1_s} media="(max-width: 499px)" />
        <img
          src={a1_m}
          alt="Frame 1 of Polish Language Campaign posters"
          className="w-full rounded-[4px]"
        />
      </picture>

      <picture>
        <source srcSet={a2_l} media="(min-width: 900px)" />
        <source srcSet={a2_m} media="(min-width: 500px)" />
        <source srcSet={a2_s} media="(max-width: 499px)" />
        <img
          src={a2_m}
          alt="Frame 2 of Polish Language Campaign posters"
          className="w-full rounded-[4px]"
        />
      </picture>

      <picture>
        <source srcSet={a3_l} media="(min-width: 900px)" />
        <source srcSet={a3_m} media="(min-width: 500px)" />
        <source srcSet={a3_s} media="(max-width: 499px)" />
        <img
          src={a3_m}
          alt="Frame 3 of Polish Language Campaign posters"
          className="w-full rounded-[4px]"
        />
      </picture>
    </div>

    <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 justify-center items-center mb-5">
      <picture>
        <source srcSet={b1_l} media="(min-width: 900px)" />
        <source srcSet={b1_m} media="(min-width: 500px)" />
        <source srcSet={b1_s} media="(max-width: 499px)" />
        <img
          src={b1_m}
          alt="Frame 4 of Polish Language Campaign posters"
          className="w-full rounded-[4px]"
        />
      </picture>

      <picture>
        <source srcSet={b2_l} media="(min-width: 900px)" />
        <source srcSet={b2_m} media="(min-width: 500px)" />
        <source srcSet={b2_s} media="(max-width: 499px)" />
        <img
          src={b2_m}
          alt="Frame 5 of Polish Language Campaign posters"
          className="w-full rounded-[4px]"
        />
      </picture>

      <picture>
        <source srcSet={b3_l} media="(min-width: 900px)" />
        <source srcSet={b3_m} media="(min-width: 500px)" />
        <source srcSet={b3_s} media="(max-width: 499px)" />
        <img
          src={b3_m}
          alt="Frame 6 of Polish Language Campaign posters"
          className="w-full rounded-[4px]"
        />
      </picture>
    </div>
    <div className="flex items-center mb-5 space-y-5 flex-col">
      <div className="w-full sm:w-3/5 relative pb-[56%] sm:pb-[34%]">
        <iframe
          src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FPolishEmbassyUK%2Fvideos%2F1561465191289450%2F&show_text=false&width=560&t=0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          allowFullScreen={false}
          title="Facebook video"
        />
      </div>
      <picture className="w-full flex justify-center">
        <source srcSet={c1_l} media="(min-width: 1200px)" />
        <source srcSet={c1_m} media="(min-width: 500px)" />
        <source srcSet={c1_s} media="(max-width: 499px)" />
        <img
          src={c1_m}
          alt="Hi! If you're reading this, I hope you're having a wonderful day!"
          className="w-full sm:max-w-[60%] rounded-[4px]"
        />
      </picture>
    </div>
  </div>
);

const Description = () => (
  <>
    <p className="  font-thin text-sm">
      While at the Embassy, I worked on a social media campaign promoting the
      Polish language and the benefits of learning it for social relationships,
      career, and personal development.
    </p>
    <p className="  font-thin text-sm">
      It was six weeks long and included long and short-form videos, as well as
      infographics. Throughout its run, it achieved an organic reach of 400,000
      (including views, reactions, and shares) between Facebook and X.
    </p>
    <p className="  font-thin text-sm -mb-10">
      While working on it, we got to look for vintage pictures in the Polish
      National Digital Archives, which I found fascinating. Going through photos
      of normal people living in communist times while making a campaign for the
      contemporary audience was surprisingly emotional. As a Pole living in the
      UK, the search brought forth thoughts about how much Poland has since
      changed, how different our lives are, and how many opportunities we now
      have.
    </p>
  </>
);

const Language = () => {
  return (
    <BlogPost
      title="Polish language campaign"
      description={<Description />}
      image="language"
      content={<Content />}
    />
  );
};

export default Language;
