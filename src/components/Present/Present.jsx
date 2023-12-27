import React from 'react';
import './Present.css';

const Present = () => {
  return (
    <section className='present'>
      <div className='present__container'>
        <h2
          className='present__title'
        >сайт портфолио</h2>
        <p
          className='present__pharagraph'
        >я Александр Белов</p>
        <p
          className='present__pharagraph'
        >2022 год - год начала моей учебы&nbsp;в&nbsp;IT</p>
        <p
          className='present__pharagraph present__pharagraph_type_thin'
        >менять профессию никогда не поздно</p>
        <div
          className='present__image'>
        </div>
      </div>

    </section>
  );
}

export default Present;
