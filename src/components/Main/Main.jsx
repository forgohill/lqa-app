import React from 'react';
import './Main.css';

import Present from '../Present/Present.jsx';
import Skills from '../Skills/Skills.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';
import Blog from '../Blog/Blog.jsx';
import Feedback from '../Feedback/Feedback.jsx';


const Main = () => {
  return (
    <main
      className='main'
    >
      <Present />
      <Skills
        subtitle='приобретенные'
        title='навыки'
      />
      <Blog
        subtitle='процессы обучения'
        title='социальный блог'
      />
      <Portfolio
        subtitle='примеры моих работ'
        title='портфолио'
      />
      <Feedback
        subtitle='здесь быть может ничего нет, пока...'
        title='отзывы'
      />
    </main>
  );
}

export default Main;

/**
       -Section
        --Present
      -Section
        --Skills
      -Section
        --Portfolio
      -Section
        --Blog
      -Section
        --Feedback
 */