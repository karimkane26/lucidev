/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';

export const SkillCard = ({ imgSrc, label, desc, classes }) => {
  return (
    <div className={
      'flex items-center gap-3 ring-2 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10 rounded-2xl p-3 ' +
      'bg-white dark:bg-zinc-800/30 hover:bg-zinc-50 dark:hover:bg-zinc-800 ' +
      'transition-colors ' +
      (classes || '')
    }>
      <figure className='bg-zinc-100 dark:bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 transition-colors shrink-0'>
        <img
          src={imgSrc}
          alt={label}
          width={32}
          height={32}
        />
      </figure>
      <div>
        <h3 className="font-medium text-zinc-900 dark:text-zinc-50">{label}</h3>
        <p className='text-zinc-500 dark:text-zinc-400 text-sm'>{desc}</p>
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
