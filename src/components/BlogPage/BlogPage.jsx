import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import './BlogPage.css';
import SectionTitle from '../SectionTitle/SectionTitle';

import BlogPage0001 from '../BlogPages/BlogPage0001/BlogPage0001';
import BlogPage0002 from '../BlogPages/BlogPage0002/BlogPage0002';
import BlogPage0003 from '../BlogPages/BlogPage0003/BlogPage0003';
import BlogPage0004 from '../BlogPages/BlogPage0004/BlogPage0004';
import BlogPage0005 from '../BlogPages/BlogPage0005/BlogPage0005';



const BlogPage = () => {

  const clickUpPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <main
      className='main blog-page'>
      <SectionTitle
        subtitle='процессы обучения'
        title='учебный блог'
      />

      {/* <BlogPage0005 /> */}
      {/* <BlogPage0004 /> */}
      {/* <BlogPage0003 /> */}
      {/* <BlogPage0002 /> */}
      <BlogPage0001 />
      <footer
        className='blog-page__footer footer-blogpage'
      >
        <ul className='footer-blogpage__list'>
          <li className='footer-blogpage__item'>
            <Link
              className='footer-blogpage__link'
              to="">предыдущая страница</Link>
          </li>
          <li
            className='footer-blogpage__item'>
            <Link
              className='footer-blogpage__link'
              to="">следующая страница</Link>
          </li>
          <li
            className='footer-blogpage__item'>
            <Link
              onClick={clickUpPage}
              className='footer-blogpage__link'
              to="">наверх</Link>
          </li>
        </ul>
      </footer>
      <Helmet>
        <title>LQA | социальный блог</title>
      </Helmet>
    </main>
  );
}

export default BlogPage;

