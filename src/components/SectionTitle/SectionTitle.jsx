import React from 'react';
import './SectionTitle.css';
const SectionTitle = ({ subtitle, title }) => {
  return (
    <div className='section-title'>
      <p className='section-title__supertitle'>{subtitle}</p>
      <h2 className='section-title__title'>{title}</h2>
    </div>
  );
}

export default SectionTitle;
