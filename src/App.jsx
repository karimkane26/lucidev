/* eslint-disable no-unused-vars */
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skill } from "./components/Skill";
import { Work } from "./components/Work";
import { Review } from "./components/Review";
import { CV } from "./components/CV";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ThemeProvider } from "./context/ThemeContext";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const AppContent = () => {
  useLayoutEffect(() => {
    // Reveal-up scroll animations
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "-200 bottom",
            end: "80%",
            scrub: true,
          },
        }
      );
    });

    // Stagger animation for skill cards
    gsap.fromTo(
      ".skill-card",
      { y: 40, opacity: 0, scale: 0.93 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.55,
        stagger: 0.08,
        ease: "back.out(1.4)",
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 82%",
          toggleActions: "play none none none",
        },
      }
    );

    // Project cards stagger
    gsap.fromTo(
      ".project-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".projects-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skill />
        <Work />
        <Review />
        <CV />
        <Contact />
        <Footer />
      </main>
    </ReactLenis>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};
