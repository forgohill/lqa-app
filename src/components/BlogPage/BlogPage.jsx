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
  return (
    <main

      className='main'>
      <section>
        <SectionTitle
          subtitle='процессы обучения'
          title='социальный блог'
        >

        </SectionTitle>
        <BlogPage0005 />
        <BlogPage0004 />
        <BlogPage0003 />
        <BlogPage0002 />
        <BlogPage0001 />
        <ul>
          <li>
            <Link
              to="">предыдущая страница</Link>
          </li>
          <li>
            <Link
              to="">следующая страница</Link>
          </li>
          <li>
            <Link
              to="">наверх</Link>
          </li>
        </ul>
      </section>
      <Helmet>
        <title>LQA | социальный блог</title>
      </Helmet>
    </main>
  );
}

export default BlogPage;

