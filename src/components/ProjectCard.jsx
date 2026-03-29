/* eslint-disable react/prop-types */

export const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
  return (
    <div className={
      `relative p-4 rounded-2xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700/60 ` +
      `active:bg-zinc-200 dark:active:bg-zinc-700/80 ring-1 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10 ` +
      `transition-colors ${classes}`
    }>
      <figure className="img-box aspect-square rounded-lg mb-4">
        <img
          src={imgSrc}
          alt={title}
          loading="lazy"
          className="img-cover"
        />
      </figure>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((label, key) => (
            <span
              key={key}
              className="h-8 text-sm text-zinc-500 dark:text-zinc-400 bg-zinc-900/5 dark:bg-zinc-50/5 grid items-center px-3 rounded-lg"
            >
              {label}
            </span>
          ))}
        </div>
        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <span className="material-symbols-rounded" aria-hidden="true">
            arrow_outward
          </span>
        </div>
      </div>
      <a href={projectLink} target="_blank" rel="noreferrer" className="absolute inset-0"></a>
    </div>
  );
};
