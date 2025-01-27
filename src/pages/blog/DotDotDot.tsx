import React from "react";
import { Stack } from "@mui/material";
import BlogPost from "./Template.tsx";
import "./blog.css";

const Content = () => (
  <Stack
    sx={{
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      pt: 2.5,
      mb: -5,
      width: "100%",
    }}
    direction={{ xs: "column", sm: "row" }}
    spacing={2.5}>
    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/episode/4qvJvxHhuIa6ouawCIuEn1?utm_source=generator&theme=0"
      width="90%"
      height="280"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="ep1"></iframe>

    <iframe
      style={{ borderRadius: "12px" }}
      src="https://open.spotify.com/embed/show/7luexxDsZbEbNqPwgB357J?utm_source=generator&theme=0"
      width="90%"
      height="280"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      title="ep2"></iframe>
  </Stack>
);

const Description = () => (
  <>
    <p className="  font-thin text-sm">
      The Dot Dot Dot was a podcast about pop culture, including the music,
      film, and other creative industries, and aired weekly on Radio Bocconi. It
      is now available on Spotify.
    </p>
    <p className="  font-thin text-sm">
      This podcast was born out of actual conversations with my friends and us
      wanting to share our goofy thoughts with friends who were not based in
      Milan. And what started as a side project, later began to occupy the
      majority of my free time with planning and researching. I loved having a
      passion project and have since always looked for something where I could
      express myself, alongside my daily responsibilities.
    </p>
    <p className="  font-thin text-sm -mb-8">
      At the DDD, I took on the role of editor, researcher, and host. Having
      such a project, alongside my studies and work at newonce, was sometimes a
      challenge but I definitely preferred (and still do) having much to do. And
      seeing a whole season of 10 episodes out on Spotify was very rewarding and
      definitely made it worth it!
    </p>
  </>
);

const DotDotDot = () => {
  return (
    <BlogPost
      title="The Dot Dot Dot Podcast"
      description={<Description />}
      image="ddd"
      content={<Content />}
    />
  );
};

export default DotDotDot;
