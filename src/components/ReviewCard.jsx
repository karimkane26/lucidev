/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const ratings = new Array(5).fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' }
});

export const ReviewCard = ({ content, name, company }) => {
  return (
    <div className="bg-white dark:bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] ring-1 ring-inset ring-zinc-900/10 dark:ring-zinc-50/5">
      <div className="flex items-center gap-1 mb-3">
        {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-yellow-400 text-[18px]"
            style={style}
          >
            {icon}
          </span>
        ))}
      </div>

      <p className="text-zinc-600 dark:text-zinc-400 mb-8 text-sm leading-relaxed">
        {content}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <div>
          <p className="font-medium text-zinc-900 dark:text-zinc-100">{name}</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
};
