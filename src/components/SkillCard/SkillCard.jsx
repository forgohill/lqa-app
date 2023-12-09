import React from 'react';
import { Link } from 'react-router-dom';
import './SkillCard.css';

const SkillCard = ({ image, title, skillList, link }) => {
  return (
    <>
      <div
        className='skill-card__image'
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>
      <div className="skill-card__wrapper">
        <h3
          className='skill-card__title'
        >{title}</h3>
        <ul
          className='skill-card__list'
        >
          {skillList}
        </ul>
        <Link
          className='skill-card__link'
          to={link}
        >
          еще...
        </Link>
      </div>

    </>
  );
}

export default SkillCard;
