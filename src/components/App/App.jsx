import React, { useEffect } from 'react';
import { Routes, Route, useLocation, } from 'react-router-dom'
import './App.css';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import BlogPage from '../BlogPage/BlogPage.jsx';
import Footer from '../Footer/Footer.jsx';

function App() {
  const { pathname } = useLocation();

  // при смене пути прокручивает наверх
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/blog-page/1'
          element={<BlogPage />}
        />
      </Routes>

      <Routes>
        <Route
          path='/'
          element={<Footer
            subtitle='днём я готов пообщаться'
            title='контакты'
          />}
        ></Route>

      </Routes>
    </div>
  );
}

export default App;

/**
      Header
      Main
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
      Footer
 */