import React, { useState, useEffect } from 'react';
import './Persona.css';
import { persons, sourcePersons } from '../../utils/persons.js';

const Persona = ({ person }) => {

  const { image } = person;
  const [isIcons, setIsIcons] = useState(0);


  let randomIndex = Math.floor(Math.random() * image.length);


  useEffect(() => {
    if (isIcons === 0) {
      setIsIcons(randomIndex);
    }
  }, [isIcons]);



  return (
    <div className='feedback__item persona'>

      <div className='persona__img-container'>
        <img
          className='persona__image'
          src={image[isIcons].image} alt="" />
      </div>
      <div className='person__content'>
        <h3
          className='persona__title'
        >{person.title}</h3>
        <p
          className='persona__pharagraph'
        >{person.text}</p>
        <button
          className='persona__button'
          onClick={() => {
            console.log(person);
          }}
        >смотреть...</button>
      </div>

    </div>
  );
}

export default Persona;
