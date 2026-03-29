/* eslint-disable no-unused-vars */
import React from 'react';
import { ProjectCard } from './ProjectCard';

const works = [
  {
    imgSrc: '/images/jayma.jpg',
    title: 'Full stack ecommerce app',
    tags: ['API', 'Express', 'React'],
    projectLink: 'https://ecommerce-frontend-tau-ten.vercel.app/',
  },
  {
    imgSrc: '/images/taskmaster.jpg',
    title: 'TaskMaster app',
    tags: ['Next', 'Nest'],
    projectLink: 'https://task-master-frontend-six.vercel.app/',
  },
  {
    imgSrc: '/images/budjet.jpg',
    title: 'Budget app',
    tags: ['Development', 'JS'],
    projectLink: 'https://zingy-unicorn-2d95c9.netlify.app/',
  },
];

export const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <h2 className="headline-2 mb-8 text-center reveal-up">My Portfolio Highlights</h2>
        <div className="projects-grid grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="project-card"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
