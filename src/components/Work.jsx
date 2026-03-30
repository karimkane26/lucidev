import { ProjectCard } from './ProjectCard';

const works = [
  {
    imgSrc: '/images/jayma.jpg',
    title: 'Application e-commerce fullstack',
    tags: ['API', 'Express', 'React'],
    projectLink: 'https://ecommerce-frontend-tau-ten.vercel.app/',
  },
  {
    imgSrc: '/images/taskmaster.jpg',
    title: 'TaskMaster — Gestion de tâches',
    tags: ['Next.js', 'NestJS'],
    projectLink: 'https://task-master-frontend-six.vercel.app/',
  },
  {
    imgSrc: '/images/budjet.jpg',
    title: 'Application de gestion de budget',
    tags: ['JavaScript', 'Vanilla'],
    projectLink: 'https://zingy-unicorn-2d95c9.netlify.app/',
  },
  {
    imgSrc: '/images/apisenegal.jpg',
    title: 'API Sénégal – Apiculture',
    tags: ['WordPress', 'E-commerce'],
    projectLink: 'https://apisenegal.sn/',
  },
  {
    imgSrc: '/images/daroukhadim.jpg',
    title: 'Darou Khadim Trading – BTP',
    tags: ['BTP', 'Corporate', 'Web'],
    projectLink: 'https://daroukhadimtrading.com/',
  },
  {
    imgSrc: '/images/globalprime.jpg',
    title: 'Global Prime Partner – Sécurité',
    tags: ['Corporate', 'France'],
    projectLink: 'https://globalprimepartner.fr/',
  },
];

export const Work = () => {
  return (
    <section id="work" className="section">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <span className="section-label reveal-up">Portfolio</span>
            <h2 className="headline-2 reveal-up">Mes réalisations</h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-[40ch] text-sm reveal-up">
            Une sélection de projets web que j'ai conçus et développés de A à Z.
          </p>
        </div>

        <div className="projects-grid grid gap-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
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
