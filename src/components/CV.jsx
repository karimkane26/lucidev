/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  'HTML / CSS', 'JavaScript', 'React.js', 'Next.js',
  'Node.js', 'Express.js', 'PHP', 'WordPress',
  'MongoDB', 'Django REST', 'Figma', 'TailwindCSS', 'Git',
];

const cvData = {
  fr: {
    sectionLabel: 'Curriculum Vitae',
    subtitle: 'Développeur Web & Mobile',
    about: "Développeur web passionné, je crée des solutions modernes et performantes en combinant créativité, rigueur et sens du détail. Polyvalent sur le frontend et le backend, je transforme les idées en projets concrets et utiles.",
    downloadBtn: 'Télécharger CV',
    contactTitle: 'Contact',
    skillsTitle: 'Compétences',
    educationTitle: 'Formation',
    experienceTitle: 'Expérience Professionnelle',
    certTitle: 'Certifications',
    projectsTitle: 'Réalisations',
    contact: {
      phone: '+221 77-162-78-21',
      email: 'lucidev97@gmail.com',
      location: 'Médina Gounass, Dakar',
      github: 'github.com/karimkane26',
    },
    education: [
      {
        degree: 'Licence en Génie Informatique',
        school: 'Univers Professionnel (UNIPRO, VDN)',
        year: '2019 – 2022',
      },
      {
        degree: 'Baccalauréat',
        school: 'Inchallah School',
        year: '2018',
      },
    ],
    experience: [
      {
        title: 'Professeur PHP',
        company: 'ICAGI – Institut Amadou Mahtar MBOW',
        year: '2025',
        tasks: [
          'Enseignement du langage PHP et développement web backend',
        ],
      },
      {
        title: 'Professeur Développement Web',
        company: 'IFES – Institut de Formation des Émeraudes de l\'Espoir',
        year: '2024 – 2025',
        tasks: [
          'Formation en développement web frontend et backend',
        ],
      },
      {
        title: 'Assistant Formateur Python',
        company: 'FORCE-N, Guédiawaye',
        year: 'Janv. 2024 (6 mois)',
        tasks: [
          'Formation Python au lycée Seydina Limamou Laye',
          'Initiation à la logique algorithmique',
          'Réalisation de projets pratiques',
        ],
      },
      {
        title: 'Développeur Web (Stage)',
        company: 'SANKOFA – Siège Ecobank, Yoff',
        year: '2023 (3 mois)',
        tasks: [
          'Web Design et développement React.js',
          'Stack: React.js (frontend) · Django REST (backend)',
          'Implémentation CRUD & intégration d\'API tierces',
        ],
      },
      {
        title: 'Design Graphique (Stage)',
        company: 'GRAPHLUX, VDN UNIPRO',
        year: '2021 (1 mois)',
        tasks: [
          'Création de logos et flyers avec Canva',
          'Développement d\'une boutique en ligne WordPress',
          'Outils: Trello & Notion',
        ],
      },
      {
        title: 'Technicien Réseau (Stage)',
        company: 'INFOCOM, Almadies',
        year: '2021 (1 mois)',
        tasks: [
          'Maintenance informatique & configuration de réseaux',
          'Installation de systèmes de vidéosurveillance',
        ],
      },
    ],
    certifications: [
      {
        name: 'Bootcamp JavaScript Fullstack',
        org: 'XARALA ACADEMY',
        year: '2024',
      },
    ],
    projects: [
      { name: 'Site e-commerce', tech: 'React & Next.js', link: 'https://ecommerce-frontend-tau-ten.vercel.app/' },
      { name: 'API de blog', tech: 'Express.js', link: null },
      { name: 'App gestion de budget', tech: 'JavaScript', link: 'https://zingy-unicorn-2d95c9.netlify.app/' },
      { name: 'Société d\'actuariat', tech: 'React', link: 'https://actuarial-consulting.sn/' },
      { name: 'Club Informatique Guédiawaye', tech: 'Web', link: 'https://clubinformatiquedeguediawaye.com' },
      { name: 'Plateforme Gestion de stock', tech: 'React.js', link: null },
    ],
  },

  en: {
    sectionLabel: 'Resume',
    subtitle: 'Web & Mobile Developer',
    about: "Passionate web developer, I create modern and high-performance solutions by combining creativity, rigor and attention to detail. Versatile in both frontend and backend, I transform ideas into concrete and useful projects.",
    downloadBtn: 'Download CV',
    contactTitle: 'Contact',
    skillsTitle: 'Skills',
    educationTitle: 'Education',
    experienceTitle: 'Professional Experience',
    certTitle: 'Certifications',
    projectsTitle: 'Projects',
    contact: {
      phone: '+221 77-162-78-21',
      email: 'lucidev97@gmail.com',
      location: 'Médina Gounass, Dakar',
      github: 'github.com/karimkane26',
    },
    education: [
      {
        degree: 'Computer Science Degree (Licence)',
        school: 'Univers Professionnel (UNIPRO, VDN)',
        year: '2019 – 2022',
      },
      {
        degree: 'High School Diploma (Baccalauréat)',
        school: 'Inchallah School',
        year: '2018',
      },
    ],
    experience: [
      {
        title: 'PHP Teacher',
        company: 'ICAGI – Amadou Mahtar MBOW Institute',
        year: '2025',
        tasks: [
          'Teaching PHP language and web backend development',
        ],
      },
      {
        title: 'Web Development Teacher',
        company: 'IFES – Institut de Formation des Émeraudes de l\'Espoir',
        year: '2024 – 2025',
        tasks: [
          'Training students in frontend and backend web development',
        ],
      },
      {
        title: 'Python Training Assistant',
        company: 'FORCE-N, Guédiawaye',
        year: 'Jan. 2024 (6 months)',
        tasks: [
          'Python teaching at Lycée Seydina Limamou Laye',
          'Introduction to algorithmic logic',
          'Practical project implementation',
        ],
      },
      {
        title: 'Web Developer (Intern)',
        company: 'SANKOFA – Ecobank HQ, Yoff',
        year: '2023 (3 months)',
        tasks: [
          'Web Design and React.js development',
          'Stack: React.js (frontend) · Django REST (backend)',
          'CRUD implementation & third-party API integration',
        ],
      },
      {
        title: 'Graphic Design (Intern)',
        company: 'GRAPHLUX, VDN UNIPRO',
        year: '2021 (1 month)',
        tasks: [
          'Logo and flyer creation with Canva',
          'WordPress e-commerce site development',
          'Tools: Trello & Notion',
        ],
      },
      {
        title: 'Network Technician (Intern)',
        company: 'INFOCOM, Almadies',
        year: '2021 (1 month)',
        tasks: [
          'IT maintenance & network configuration',
          'CCTV surveillance system installation',
        ],
      },
    ],
    certifications: [
      {
        name: 'JavaScript Fullstack Bootcamp',
        org: 'XARALA ACADEMY',
        year: '2024',
      },
    ],
    projects: [
      { name: 'E-commerce Website', tech: 'React & Next.js', link: 'https://ecommerce-frontend-tau-ten.vercel.app/' },
      { name: 'Blog API', tech: 'Express.js', link: null },
      { name: 'Budget Management App', tech: 'JavaScript', link: 'https://zingy-unicorn-2d95c9.netlify.app/' },
      { name: 'Actuarial Company Site', tech: 'React', link: 'https://actuarial-consulting.sn/' },
      { name: 'Guédiawaye IT Club', tech: 'Web', link: 'https://clubinformatiquedeguediawaye.com' },
      { name: 'Stock Management Platform', tech: 'React.js', link: null },
    ],
  },
};

export const CV = () => {
  const [lang, setLang] = useState('fr');
  const sectionRef = useRef(null);
  const sidebarRef = useRef(null);
  const mainRef = useRef(null);
  const timelineRef = useRef(null);
  const headerRef = useRef(null);

  const data = cvData[lang];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header fade-in
      gsap.fromTo(
        headerRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Sidebar slides in from left
      gsap.fromTo(
        sidebarRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Main content slides in from right
      gsap.fromTo(
        mainRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.9, ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Timeline items stagger
      gsap.fromTo(
        '.cv-timeline-item',
        { x: 30, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Project tiles stagger
      gsap.fromTo(
        '.cv-project-tile',
        { scale: 0.9, opacity: 0 },
        {
          scale: 1, opacity: 1, duration: 0.4, stagger: 0.08, ease: 'back.out(1.3)',
          scrollTrigger: {
            trigger: '.cv-projects-grid',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [lang]);

  const switchLang = (newLang) => {
    if (newLang === lang) return;
    gsap.to([sidebarRef.current, mainRef.current], {
      opacity: 0, y: 8, duration: 0.2, ease: 'power1.in',
      onComplete: () => {
        setLang(newLang);
        gsap.to([sidebarRef.current, mainRef.current], {
          opacity: 1, y: 0, duration: 0.35, ease: 'power2.out',
        });
      },
    });
  };

  return (
    <section id="cv" ref={sectionRef} className="section">
      <div className="container">

        {/* Section header */}
        <div ref={headerRef} className="flex flex-wrap items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-sky-400 text-xs font-bold uppercase tracking-[0.2em] mb-2">
              {lang === 'fr' ? 'Mon Profil' : 'My Profile'}
            </p>
            <h2 className="headline-2">{data.sectionLabel}</h2>
          </div>

          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-xl p-1 gap-1 ring-1 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10">
              <button
                onClick={() => switchLang('fr')}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  lang === 'fr'
                    ? 'bg-sky-400 text-zinc-950 shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => switchLang('en')}
                className={`px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  lang === 'en'
                    ? 'bg-sky-400 text-zinc-950 shadow-sm'
                    : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                EN
              </button>
            </div>

            {/* Download */}
            <a
              href="/cv/MONCV.pdf"
              download
              className="btn btn-primary"
            >
              {data.downloadBtn}
              <span className="material-symbols-rounded text-[18px]">download</span>
            </a>
          </div>
        </div>

        {/* CV Card */}
        <div className="rounded-3xl overflow-hidden ring-1 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10 bg-white dark:bg-zinc-800/30 shadow-lg dark:shadow-none">
          <div className="grid lg:grid-cols-[290px,1fr]">

            {/* ─── SIDEBAR ─── */}
            <div
              ref={sidebarRef}
              className="bg-zinc-50 dark:bg-zinc-800/80 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-zinc-900/10 dark:border-zinc-50/10"
            >
              {/* Avatar */}
              <div className="text-center mb-8">
                <figure className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 ring-4 ring-sky-400/30 shadow-md">
                  <img src="/images/avatar.jpg" alt="Abdoul Karim Kane" className="img-cover" />
                </figure>
                <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50">Abdoul Karim Kane</h3>
                <p className="text-sky-500 dark:text-sky-400 text-sm mt-1 font-medium">{data.subtitle}</p>
              </div>

              {/* About */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8 border-b border-zinc-900/10 dark:border-zinc-50/10 pb-8">
                {data.about}
              </p>

              {/* Contact */}
              <SideSection title={data.contactTitle}>
                <ContactItem icon="phone" text={data.contact.phone} />
                <ContactItem icon="mail" text={data.contact.email} breakAll />
                <ContactItem icon="location_on" text={data.contact.location} />
                <ContactItem icon="code" text={data.contact.github} />
              </SideSection>

              {/* Skills */}
              <SideSection title={data.skillsTitle}>
                <div className="flex flex-wrap gap-1.5">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 px-2.5 py-1 rounded-lg ring-1 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SideSection>

              {/* Education */}
              <SideSection title={data.educationTitle} noBorder>
                <div className="space-y-4">
                  {data.education.map((edu, i) => (
                    <div key={i} className="border-l-2 border-sky-400/50 pl-3">
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{edu.degree}</p>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{edu.school}</p>
                      <p className="text-xs text-sky-500 dark:text-sky-400 mt-0.5 font-medium">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </SideSection>
            </div>

            {/* ─── MAIN CONTENT ─── */}
            <div ref={mainRef} className="p-8 lg:p-10">

              {/* Experience Timeline */}
              <MainSection title={data.experienceTitle} icon="work">
                <div ref={timelineRef} className="relative">
                  {/* Vertical line */}
                  <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-sky-400 via-sky-400/30 to-transparent rounded-full" />

                  <div className="space-y-7">
                    {data.experience.map((exp, i) => (
                      <div key={i} className="cv-timeline-item relative pl-7">
                        {/* Dot */}
                        <div className="timeline-dot absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-sky-400 ring-[3px] ring-white dark:ring-zinc-900 z-10" />

                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                          <h5 className="font-bold text-zinc-900 dark:text-zinc-50 text-sm">{exp.title}</h5>
                          <span className="text-xs text-sky-500 dark:text-sky-400 font-semibold bg-sky-50 dark:bg-sky-400/10 px-2 py-0.5 rounded-full whitespace-nowrap">
                            {exp.year}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-2 font-medium">{exp.company}</p>
                        <ul className="space-y-0.5">
                          {exp.tasks.map((task, j) => (
                            <li key={j} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-1.5">
                              <span className="text-sky-400 mt-0.5 shrink-0">›</span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </MainSection>

              {/* Certifications */}
              <MainSection title={data.certTitle} icon="verified">
                <div className="space-y-3">
                  {data.certifications.map((cert, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between bg-zinc-50 dark:bg-zinc-700/40 rounded-xl p-4 ring-1 ring-inset ring-zinc-900/5 dark:ring-zinc-50/5"
                    >
                      <div>
                        <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-50">{cert.name}</p>
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{cert.org}</p>
                      </div>
                      <span className="text-xs text-sky-500 dark:text-sky-400 font-semibold bg-sky-50 dark:bg-sky-400/10 px-3 py-1 rounded-full">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </MainSection>

              {/* Projects */}
              <MainSection title={data.projectsTitle} icon="rocket_launch" noBorder>
                <div className="cv-projects-grid grid sm:grid-cols-2 gap-3">
                  {data.projects.map((proj, i) => (
                    <div
                      key={i}
                      className="cv-project-tile bg-zinc-50 dark:bg-zinc-700/40 rounded-xl p-4 ring-1 ring-inset ring-zinc-900/5 dark:ring-zinc-50/5 flex items-center justify-between gap-3 group transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700/70"
                    >
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-zinc-900 dark:text-zinc-50 truncate">{proj.name}</p>
                        <p className="text-xs text-sky-500 dark:text-sky-400 mt-0.5">{proj.tech}</p>
                      </div>
                      {proj.link ? (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg grid place-items-center bg-sky-400/15 text-sky-500 dark:text-sky-400 hover:bg-sky-400 hover:text-zinc-950 transition-colors shrink-0"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="material-symbols-rounded text-[16px]">arrow_outward</span>
                        </a>
                      ) : (
                        <div className="w-8 h-8 rounded-lg grid place-items-center bg-zinc-100 dark:bg-zinc-600/40 text-zinc-400 shrink-0">
                          <span className="material-symbols-rounded text-[16px]">lock</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </MainSection>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Helper sub-components ─── */

const SideSection = ({ title, children, noBorder }) => (
  <div className={`mb-7 ${!noBorder ? 'border-b border-zinc-900/10 dark:border-zinc-50/10 pb-7' : ''}`}>
    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-400 mb-3">
      {title}
    </h4>
    {children}
  </div>
);

const ContactItem = ({ icon, text, breakAll }) => (
  <div className="flex items-start gap-2 text-sm mb-2">
    <span className="material-symbols-rounded text-[15px] text-zinc-400 mt-0.5 shrink-0">{icon}</span>
    <span className={`text-zinc-700 dark:text-zinc-300 text-xs ${breakAll ? 'break-all' : ''}`}>{text}</span>
  </div>
);

const MainSection = ({ title, icon, children, noBorder }) => (
  <div className={`mb-10 ${!noBorder ? 'border-b border-zinc-900/10 dark:border-zinc-50/10 pb-10' : ''}`}>
    <h4 className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-500 dark:text-sky-400 mb-6">
      <span className="material-symbols-rounded text-[16px]">{icon}</span>
      {title}
    </h4>
    {children}
  </div>
);
