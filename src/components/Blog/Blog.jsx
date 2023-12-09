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
      <SectionTitle
        subtitle={subtitle}
        title={title}
      />

      <article className='blog__wrapper'>
        <div className='blog__img-container'>
          <img className='blog__image'
            src={post__title} alt="" />
        </div>
        <div className='blog__content'>
          <h3 className="blog__title">
            Нашел для себя классный ресурс.
          </h3>
          <p className="blog__pharagraph">
            В своём стремлении улучшить пользовательский опыт мы упускаем, что ключевые особенности структуры проекта, превозмогая сложившуюся непростую экономическую ситуацию, смешаны с не уникальными данными до степени совершенной неузнаваемости...
          </p>
          <p className="blog__pharagraph blog__pharagraph_accent_light">19.08.2022г</p>
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
