import React, { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";

type blogProps = {
  title: string;
  description: any;
  image: string;
  content: any;
};

const BlogPost: React.FC<blogProps> = ({
  title,
  description,
  image,
  content,
}) => {
  const img_s = require(`./images/${image}_s.webp`);
  const img_m = require(`./images/${image}_m.webp`);
  const img_l = require(`./images/${image}_l.webp`);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div className="min-h-[calc(100vh-68px)] pb-10 md:py-10 lg:py-20 bg-w">
      <section className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10">
        <div className="flex flex-col space-y-12 sm:space-y-0 sm:space-x-12 sm:flex-row border-b-[2px] w-full pt-10 sm:pt-0">
          <div className="w-full max-h-[300px] sm:max-h-[550px] rounded-[4px] mb-[4rem]">
            <picture>
              <source srcSet={img_l} media="(min-width: 1200px)" />
              <source srcSet={img_m} media="(min-width: 768px)" />
              <source srcSet={img_s} media="(max-width: 767px)" />
              <img
                src={img_m}
                alt={title}
                className="w-full h-auto max-h-full rounded-[4px] transition-opacity ease-in-out group-hover:opacity-75"
              />
            </picture>
          </div>

          <div className="w-full">
            <header className="  text-4xl pb-4 sm:pb-10">{title}</header>

            <div className="  font-thin text-sm pb-16">{description}</div>

            <div className="flex items-end h-[1rem] pb-8">
              <Link
                smooth
                to="/#projects"
                aria-label="Back to Projects"
                className="text-sm font-bold   text-gray-900 hover:text-b transition duration-300">
                • Back to Projects
              </Link>
            </div>
          </div>
        </div>

        <div>{content}</div>

        <div className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10 border-b-[2px] pt-4" />
      </section>
    </div>
  );
};

export default BlogPost;
