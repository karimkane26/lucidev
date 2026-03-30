import React from 'react';
import { SkillCard } from './SkillCard';

const skillItem = [
  { imgSrc: '/images/figma.svg',      label: 'Figma',      desc: 'Design UI/UX' },
  { imgSrc: '/images/css3.svg',       label: 'CSS',        desc: 'Styles & animations' },
  { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Interactivité' },
  { imgSrc: '/images/nodejs.svg',     label: 'NodeJS',     desc: 'Serveur web' },
  { imgSrc: '/images/expressjs.svg',  label: 'ExpressJS',  desc: 'Framework Node' },
  { imgSrc: '/images/mongodb.svg',    label: 'MongoDB',    desc: 'Base de données' },
  { imgSrc: '/images/react.svg',      label: 'React',      desc: 'Framework UI' },
  { imgSrc: '/images/tailwindcss.svg',label: 'TailwindCSS',desc: 'Styles utilitaires' },
];

export const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <span className="section-label reveal-up">Technologies</span>
        <h2 className="headline-2 reveal-up">Mes outils essentiels</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mt-3 mb-10 max-w-[48ch] reveal-up">
          Les technologies que j'utilise pour créer des sites web et applications modernes et performants.
        </p>

        <div className="skills-grid grid gap-3 grid-cols-[repeat(auto-fill,minmax(220px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="skill-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
