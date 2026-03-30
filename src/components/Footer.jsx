import { ButtonPrimary } from "./Button";

const sitemap = [
  { label: 'Accueil',    href: '#home' },
  { label: 'À propos',   href: '#about' },
  { label: 'Projets',    href: '#work' },
  { label: 'CV',         href: '#cv' },
  { label: 'Contact',    href: '#contact' }
];

const socials = [
  { label: 'GitHub',   href: 'https://github.com/karimkane26' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdoul-karim-kane-516396209' },
  { label: 'Twitter X',href: 'https://x.com/Abdoulk82109408' },
  { label: 'CodePen',  href: 'https://codepen.io/Abdoul-karim-Kane' }
];

export const Footer = () => {
  return (
    <footer className="section pb-8">
      <div className="container">

        {/* CTA banner */}
        <div className="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-14 mb-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8 reveal-up">
          <div>
            <h2 className="headline-2 text-zinc-50 mb-3 lg:max-w-[14ch]">
              Prêt à démarrer votre projet ?
            </h2>
            <p className="text-zinc-400 text-sm max-w-[40ch]">
              Contactez-moi et transformons vos idées en réalité numérique.
            </p>
          </div>
          <ButtonPrimary
            href="mailto:lucidev97@gmail.com"
            label="Démarrer un projet"
            icon="chevron_right"
            classes="shrink-0"
          />
        </div>

        {/* Bottom */}
        <div className="grid grid-cols-[1fr,auto,auto] gap-8 items-start reveal-up">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-3">
              <img src="/images/logo.svg" width={32} height={32} alt="Logo" />
              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">lucidev</span>
            </a>
            <p className="text-xs text-zinc-400 dark:text-zinc-500 max-w-[24ch] leading-relaxed">
              Développeur Web & Mobile — Dakar, Sénégal
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">Plan du site</p>
            <ul className="space-y-2">
              {sitemap.map(({ label, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-widest mb-3">Réseaux</p>
            <ul className="space-y-2">
              {socials.map(({ label, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 mt-10 pt-6 flex items-center justify-between">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; 2026 lucidev — Abdoul Karim Kane
          </p>
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            Dakar, Sénégal
          </p>
        </div>

      </div>
    </footer>
  );
};
