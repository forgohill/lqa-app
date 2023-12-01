import React from 'react';
import Slider from "react-slick";

import './Feedback.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import Persona from '../Persona/Persona.jsx';
import { persons } from '../../utils/persons.js';


const Feedback = ({ subtitle, title }) => {

  const renderPersons = persons.map((person) => {
    return <Persona
      key={person.toString()}
      person={person}
    />
  });
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    appendDots: dots => (
      <div>
        <ul>
          {dots}
        </ul>
      </div>
    ),
    customPaging: i => (
      <div></div>
    ),
    arrows: false,
  };


  return (
    <section
      className='feedback'
    >
      <SectionTitle
        subtitle={subtitle}
        title={title}
      />

      <article
        className='feedback__list'>
        <Slider {...settings}>
          {renderPersons}
        </Slider>
      </article>

    </section>
  );
}

export default Feedback;
