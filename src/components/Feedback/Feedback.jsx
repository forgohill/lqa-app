import React from 'react';
import Slider from "react-slick";

import './Feedback.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import Persona from '../Persona/Persona.jsx';
import { persons } from '../../utils/persons_random.js';


const Feedback = ({ subtitle, title }) => {

  const renderPersons = persons.map((person, index) => {
    return <Persona
      key={index.toString()}
      person={person}
      index={index}
    />
  });
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (<div><ul>{dots}</ul></div>),
    customPaging: i => (<div></div>),
    arrows: false,
  };


  return (
    <section
      className='feedback'>
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
