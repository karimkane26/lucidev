import React from "react";

const stats = [
  { number: "7+", label: "Projets livrés" },
  { number: "2+", label: "Ans d'expérience" },
  { number: "3",  label: "Certifications" },
];

export const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-start reveal-up">

          {/* ── Main card ── */}
          <div className="bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 rounded-3xl p-8 md:p-12 shadow-sm">
            <span className="section-label">À propos</span>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg leading-relaxed max-w-[60ch]">
              Bonjour, je suis <span className="font-semibold text-zinc-900 dark:text-zinc-50">Abdoul Karim Kane</span> — développeur web passionné, basé à Dakar. Je crée des solutions modernes et performantes en combinant créativité, rigueur et sens du détail.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed max-w-[55ch]">
              Polyvalent frontend &amp; backend, je travaille avec React, Node.js, PHP et WordPress pour transformer vos idées en produits concrets et utiles.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-zinc-100 dark:border-zinc-700/60">
              {stats.map(({ number, label }) => (
                <div key={label}>
                  <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50" style={{ letterSpacing: "-0.02em" }}>
                    {number}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Side card ── */}
          <div className="bg-sky-500 text-white rounded-3xl p-8 shadow-lg shadow-sky-500/20 min-w-[220px] lg:self-stretch flex flex-col justify-between">
            <div>
              <span className="text-sky-200 text-xs font-semibold uppercase tracking-widest">Stack</span>
              <div className="mt-4 flex flex-col gap-2">
                {["React.js", "Node.js", "Next.js", "PHP", "WordPress", "MongoDB"].map((tech) => (
                  <span key={tech} className="text-sm font-medium text-white/90">{tech}</span>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <img src="/images/logo.svg" alt="Logo" width={36} height={36} className="opacity-80 invert" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
