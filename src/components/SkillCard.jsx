import PropTypes from 'prop-types';

export const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={
      'flex items-center gap-4 bg-white dark:bg-zinc-800/60 ' +
      'border border-zinc-200/80 dark:border-zinc-700/60 ' +
      'rounded-2xl p-4 shadow-sm ' +
      'hover:border-sky-300/60 dark:hover:border-sky-500/30 ' +
      'transition-all ' +
      (classes || '')
    }>
      <figure className="w-11 h-11 rounded-xl overflow-hidden bg-zinc-50 dark:bg-zinc-700/50 p-2 shrink-0">
        <img src={imgSrc} alt={label} width={28} height={28} className="w-full h-full object-contain" />
      </figure>
      <div>
        <h3 className="font-semibold text-sm text-zinc-900 dark:text-zinc-50">{label}</h3>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{desc}</p>
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};
