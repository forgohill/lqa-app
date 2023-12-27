import React from 'react';
import { Link } from 'react-router-dom'

import './Card.css';

const Card = ({ card, key, index }) => {
  const {
    text,
    title,
    image,
    alt,
    pathname
  } = card;

  return (
    <li className="portfolio__item card">
      <div
        className='card__content'
      >
        <h3
          className='card__title'
        >{title}</h3>
        <p
          className='card__pharegraph'
        >
          {text}
          {/* {card.text.slice(0, 290)} */}
        </p>
        <Link
          className='card__link'
          target='_blank'
          rel='noreferrer'
          to={pathname}
        >смотреть на github.com</Link>
      </div>

      <div
        to='/project-1'
        className='card__img-container'
      >
        <img
          className='card__image'
          src={image}
          alt={alt} />
      </div>
    </li>

  );
}

export default Card;
