import PropTypes from "prop-types";

export const ReviewCard = ({ content, name, company }) => {
  return (
    <div className="bg-white dark:bg-zinc-800/60 border border-zinc-200/80 dark:border-zinc-700/60 rounded-xl p-4 flex flex-col shadow-sm">
      {/* Icon */}
      <div className="w-7 h-7 rounded-lg bg-sky-50 dark:bg-sky-500/10 grid place-items-center mb-3 shrink-0">
        <span className="material-symbols-rounded text-sky-500 text-[15px]">work</span>
      </div>

      <p className="text-zinc-600 dark:text-zinc-300 text-xs leading-relaxed flex-1">
        {content}
      </p>

      <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-700/60">
        <p className="font-semibold text-xs text-zinc-900 dark:text-zinc-50">{name}</p>
        <p className="text-[11px] text-zinc-400 dark:text-zinc-500 mt-0.5">{company}</p>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};
