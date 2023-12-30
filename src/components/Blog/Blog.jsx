import React from 'react';
import { Link } from 'react-router-dom'
import './Blog.css';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
import post__title from '../../img/blog/post__title.webp'
const Blog = ({ subtitle, title }) => {
  return (
    <section
      className='blog'
    >
      <Link
        // className='portfolio__link'
        className='blog__title-link'

        to='/blog-page/1'
      >
        <SectionTitle
          subtitle={subtitle}
          title={title}
        />
      </Link>
      <article className='blog__wrapper'>
        <div className='blog__img-container'>
          <img className='blog__image'
            src={post__title} alt="" />
        </div>
        <div className='blog__content'>
          <h3 className="blog__title">
            Первое касание с TypeScript, создание Todolist по видеоуроку
          </h3>
          <p className="blog__pharagraph">
            Повторил небольшой видеоурок по проекту TS + React. Готовый результат разместил на GH-page. Начал изучать TS по книге + формат книжного клуба от Я.Практикум.
          </p>
          <p className="blog__pharagraph blog__pharagraph_accent_light">28.12.2023г</p>
          <Link
            className="blog__link"
            to='/blog-page/1'
          >
            читать...
          </Link>
        </div>
      </article>

    </section>
  );
}

export default Blog;
