import React from 'react';
import './Skills.css';
import element1 from '../../img/present/element1.svg';
import element2 from '../../img/present/element2.svg';
import element3 from '../../img/present/element3.svg';

import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import SkillCard from '../SkillCard/SkillCard.jsx';

const Skills = ({ subtitle, title }) => {
  return (
    <section
      className='skills'
    >
      <SectionTitle
        subtitle={subtitle}
        title={title}
      />

      <article className='skills__skillscard'>
        <ul
          className='skills__list'
        >
          <li className='skills__item skill-card'>
            <SkillCard
              image={element1}
              title='верстка сайтов'
              skillList={(
                <>
                  <li
                    className='skill-card__item'
                  >HTML</li>
                  <li
                    className='skill-card__item'
                  >CSS</li>
                  <li
                    className='skill-card__item'
                  >JavaScript</li>
                </>
              )}
              link='/elem1'
            />
          </li>
          <li
            className='skills__item skill-card'>
            <SkillCard
              image={element2}
              title='разработка'
              skillList={(
                <>
                  <li
                    className='skill-card__item'
                  >React
                  </li>
                  <li
                    className='skill-card__item'
                  >БЭМ</li>
                  <li
                    className='skill-card__item'
                  >FSD</li>
                </>
              )}
              link='/elem1'
            />
          </li>
          <li
            className='skills__item skill-card'>
            <SkillCard
              image={element3}
              title='оптимизация'
              skillList={(
                <>
                  <li
                    className='skill-card__item'
                  >увеличение
                  </li>
                  <li
                    className='skill-card__item'
                  >эффективности</li>
                  <li
                    className='skill-card__item'
                  >работающего сайта</li>
                </>
              )}
              link='/elem1'
            />
          </li>

        </ul>

      </article>

    </section >
  );
}

export default Skills;
