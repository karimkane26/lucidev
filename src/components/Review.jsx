import { ReviewCard } from "./ReviewCard";

const experiences = [
  {
    content: "Formation d'élèves en Python au lycée Seydina Limamou Laye. Initiation à la logique algorithmique et projets pratiques.",
    name: "FORCE-N",
    company: "Assistant formateur Python — 2024 (6 mois)"
  },
  {
    content: "Création d'une plateforme de distribution agricole. Stack: React.js (frontend) + Django REST (backend). Missions: CRUD & intégration d'API.",
    name: "SANKOFA",
    company: "Développeur Web (Stage) — 2023 (3 mois)"
  },
  {
    content: "Création de logos et flyers avec Canva. Développement d'une boutique en ligne WordPress. Outils: Trello & Notion.",
    name: "GRAPHLUX",
    company: "Design Graphique (Stage) — 2021 (1 mois)"
  },
  {
    content: "Maintenance informatique et configuration de réseaux. Installation de systèmes de vidéosurveillance.",
    name: "INFOCOM",
    company: "Technicien Réseau (Stage) — 2021 (1 mois)"
  }
];

const formations = [
  {
    content: "Bootcamp Développement Web JavaScript Fullstack. Projets: e-commerce React/Next.js, API blog Express.js, app gestion de budget.",
    name: "XARALA ACADEMY",
    company: "Certification Bootcamp JS Fullstack — 2024"
  },
  {
    content: "Licence en Génie Informatique. Formation complète en développement logiciel et systèmes.",
    name: "Univers Professionnel (UNIPRO)",
    company: "2019 – 2022"
  },
  {
    content: "Études secondaires — Baccalauréat.",
    name: "Lycée Seydina Limamou Laye",
    company: "2015 – 2018"
  }
];

export const Review = () => {
  return (
    <section id="reviews" className="section overflow-hidden">
      <div className="container">
        <h2 className="headline-2 mb-2 reveal-up">Mon Parcours</h2>
        <p className="text-zinc-500 dark:text-zinc-400 mb-8 reveal-up">My Career Journey</p>

        <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mb-4">Expériences Professionnelles</h3>
        <div className="flex items-stretch gap-3 w-fit overflow-x-auto pb-3">
          {experiences.map(({ content, name, company }, key) => (
            <ReviewCard key={key} name={name} company={company} content={content} />
          ))}
        </div>

        <h3 className="text-lg font-semibold text-zinc-700 dark:text-zinc-300 mt-12 mb-4">Formations &amp; Certifications</h3>
        <div className="flex items-stretch gap-3 w-fit overflow-x-auto pb-3">
          {formations.map(({ content, name, company }, key) => (
            <ReviewCard key={key} name={name} company={company} content={content} />
          ))}
        </div>
      </div>
    </section>
  );
};
