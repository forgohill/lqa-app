import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const PageNotFound = () => {
  return (
    <main className='main'>

      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__pharagraph">
        к сожалению такая страница не найдена
      </p>
      <Link
        className="page-not-found__link"
        to='/'
      >
        на главную страницу
      </Link>
      <Helmet>
        <title>LQA | страница 404</title>
      </Helmet>
    </main >
  );
}

export default PageNotFound;
