import React, { useState, useEffect } from 'react';
import './Persona.css';

const Persona = ({ person, index }) => {
  const { image } = person;
  const { content } = person;
  const [isIconsOne, setIsIconsOne] = useState(0);
  const [isIconsTwo, setIsIconsTwo] = useState(0);
  const [isContentOne, setIsContentOne] = useState(0);
  const [isContentTwo, setIsContentTwo] = useState(0)

  let randomIndexOne = Math.floor(Math.random() * image.length);
  let randomIndexTwo = Math.floor(Math.random() * image.length);
  let randomContentOne = Math.floor(Math.random() * content.length);
  let randomContentTwo = Math.floor(Math.random() * content.length);

  useEffect(() => {
    if (isIconsOne === 0) {
      setIsIconsOne(randomIndexOne);
    }
    if (isIconsTwo === 0) {
      setIsIconsTwo(randomIndexTwo);
    }
    if (isContentOne === 0) {
      setIsContentOne(randomContentOne);
    }
    if (isContentTwo === 0) {
      setIsContentTwo(randomContentTwo);
    }
  }, [isIconsOne, isIconsTwo, isContentOne, isContentTwo]);

  return (
    <div className="feedback__item persona">
      <div className=' persona__wrapper'>
        <div className='persona__img-container'>
          <img
            className='persona__image'
            src={image[isIconsOne].image} alt="" />
        </div>
        <div className='person__content'>
          <h3
            className='persona__title'
          >{content[isContentOne].author}</h3>
          <p
            className='persona__pharagraph'
          >{content[isContentOne].text}</p>
          {/* <button
            className='persona__button'
            onClick={() => {
              console.log(person);
              console.log(index);
            }}
          >смотреть...</button> */}
        </div>
      </div>
      <div className='persona__wrapper persona__wrapper_type_accent'>
        <div className='persona__img-container'>
          <img
            className='persona__image'
            src={image[isIconsTwo].image} alt="" />
        </div>
        <div className='person__content'>
          <h3
            className='persona__title'
          >{content[isContentTwo].author}</h3>
          <p
            className='persona__pharagraph'
          >{content[isContentTwo].text}</p>
          {/* <button
            className='persona__button'
            onClick={() => {
              console.log(person);
              console.log(index);
            }}
          >смотреть...</button> */}
        </div>
      </div>
    </div>
  );
}

export default Persona;
