import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Portfolio.css';


import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import ProfileNextArrow from '../ProfileNextArrow/ProfileNextArrow.jsx';
import ProfilePrevArrow from '../ProfilePrevArrow/ProfilePrevArrow.jsx';
import Card from '../Card/Card.jsx';

import { sourceCards } from '../../utils/portfolio.js';

const Portfolio = ({ subtitle, title }) => {

  const renderCards = sourceCards.map((card) => {
    return <Card
      key={card.toString()}
      card={card}
    />
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ProfileNextArrow />,
    prevArrow: <ProfilePrevArrow />,
    appendDots: dots => (
      <div>
        <ul>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <p>
        {i + 1}
      </p>
    )
  };


  return (
    <section
      className='portfolio'
    >
      <Link
        className='portfolio__link'
        to='/portfolio-page'
      >
        <SectionTitle
          subtitle={subtitle}
          title={title}
        />
      </Link>
      <article
        className='portfolio__wrapper'>
        <div
          className='portfolio__slider-container'>
          <Slider {...settings}>
            {renderCards}
          </Slider>
        </div>
      </article>

    </section>
  );
}

export default Portfolio;
