import { useEffect, useRef } from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import gsap from "gsap";

export const Hero = () => {
  const avatarRef = useRef(null);

  useEffect(() => {
    gsap.to(avatarRef.current, {
      y: -12,
      duration: 3,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });

    gsap.fromTo(
      ".hero-content > *",
      { y: 24, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.1,
      }
    );
  }, []);

  return (
    <section id="home" className="pt-28 lg:pt-40 pb-10 lg:pb-0">
      <div className="container lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

        {/* ── Text side ── */}
        <div className="hero-content">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-full px-4 py-2 shadow-sm mb-8">
            <figure className="w-7 h-7 rounded-full overflow-hidden shrink-0">
              <img
                src="/images/avatar.jpg"
                width={28}
                height={28}
                alt="Karim Kane"
                className="img-cover"
              />
            </figure>
            <span className="flex items-center gap-1.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              <span className="relative w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
              </span>
              Disponible pour des projets
            </span>
          </div>

          {/* Heading */}
          <h2 className="headline-1 max-w-[14ch] mb-5 text-zinc-900 dark:text-zinc-50">
            Créer des Expériences Web Modernes &amp; Performantes
          </h2>

          {/* Sub */}
          <p className="text-zinc-500 dark:text-zinc-400 text-lg leading-relaxed max-w-[38ch] mb-10">
            Développeur Web &amp; Mobile basé à Dakar — je transforme vos idées en produits numériques élégants.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            <ButtonPrimary
              href="/cv/Abdoul Karim Kane cv.pdf"
              label="Télécharger CV"
              icon="download"
              download={true}
            />
            <ButtonOutline
              href="#about"
              label="En savoir plus"
              icon="arrow_downward"
            />
          </div>
        </div>

        {/* ── Avatar side ── */}
        <div className="hidden lg:flex justify-center" ref={avatarRef}>
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-[60px] bg-gradient-to-br from-sky-400/20 to-indigo-400/10 dark:from-sky-500/15 dark:to-indigo-500/10 blur-xl" />
            <figure className="relative w-full max-w-[420px] bg-gradient-to-b from-sky-400/30 via-sky-400/10 to-transparent rounded-[48px] overflow-hidden shadow-2xl shadow-sky-400/10">
              <img
                src="/images/avatar.jpg"
                width={600}
                height={740}
                alt="Abdoul Karim"
                className="w-full"
              />
            </figure>
            {/* Floating stat card */}
            <div className="absolute -left-8 bottom-12 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-2xl px-5 py-3 shadow-xl">
              <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">7+</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Projets livrés</p>
            </div>
            {/* Floating badge */}
            <div className="absolute -right-6 top-16 bg-sky-500 text-white rounded-2xl px-4 py-2.5 shadow-lg shadow-sky-500/30">
              <p className="text-xs font-semibold">2+ ans</p>
              <p className="text-[10px] opacity-80">d'expérience</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
