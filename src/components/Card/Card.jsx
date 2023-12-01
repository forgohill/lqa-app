import React from 'react';
import { Link } from 'react-router-dom'

import './Card.css';

const Card = ({ card }) => {
  return (
    <li className="portfolio__item card">

      <div
        className='card__content'
      >
        <h3
          className='card__title'
        >{card.title}</h3>
        <p
          className='card__pharegraph'
        >{card.text}</p>
        <Link
          className='card__link'
          to=''
        >смотреть...</Link>
      </div>

      <Link
        className='card__img-container'
      >
        <img
          className='card__image'
          src={card.image}
          alt={card.alt} />
      </Link>
    </li>

  );
}

export default Card;
