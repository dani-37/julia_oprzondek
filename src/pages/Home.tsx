import React, { useEffect, useRef } from "react";
import "./global.css";
import About from "./About.tsx";
import Experience from "./Experience.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";

export default function HomePage({
  activeSection,
  setActiveSection,
}: {
  activeSection: string;
  setActiveSection: any;
}) {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "-67px",
      threshold: 0.1, // Trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    [aboutRef, projectsRef, experienceRef, contactRef].forEach((sectionRef) => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <div
        id="about"
        className="md:pt-[6vh] pb-20 bg-w scroll-mt-[100px]"
        ref={aboutRef}>
        <section className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10 min-h-[66.6vh]">
          <About />
        </section>
      </div>

      <div id="projects" className="bg-b scroll-mt-[67px]" ref={projectsRef}>
        <section className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10">
          <Projects />
        </section>
      </div>

      <div
        id="experience"
        className="bg-w scroll-mt-[67px]"
        ref={experienceRef}>
        <section className="mx-auto max-w-screen-xl px-[5%] md:px-20 lg:px-40 2xl:px-10 cursor-default">
          <Experience />
        </section>
      </div>

      <div
        id="contact"
        className="relative bg-b scroll-mt-[67px]"
        ref={contactRef}>
        <section className="mx-auto max-w-screen-xl h-[500px] 2xl:h-[500px] sm:h-[70vh] sm:min-h-[450px] px-[5%] md:px-20 lg:px-40 2xl:px-10">
          <Contact />
          <div className="absolute bottom-10 right-[10%] sm:pr-0 text-sm mx-auto text-right text-w">
            Website by
            <a
              href="https://www.linkedin.com/in/dvegarabalsa/"
              aria-label="LinkedIn page of the web developer"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold pl-1 z-50">
              Daniel Vegara
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
