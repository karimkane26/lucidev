export const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div className={`group relative bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${classes}`}>
      {/* Image */}
      <figure className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-zinc-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="flex items-center gap-2 text-white text-sm font-semibold bg-sky-500 px-5 py-2.5 rounded-xl shadow-lg">
            <span className="material-symbols-rounded text-[18px]">arrow_outward</span>
            Voir le projet
          </span>
        </div>
      </figure>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-3" style={{ letterSpacing: "-0.01em" }}>
          {title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((label, key) => (
            <span
              key={key}
              className="text-xs font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-700/60 px-2.5 py-1 rounded-lg"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <a href={projectLink} target="_blank" rel="noreferrer" className="absolute inset-0" aria-label={title}></a>
    </div>
  );
};
