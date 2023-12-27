import React from 'react';
import { Link } from 'react-router-dom'
import './Footer.css';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';

const Footer = ({ subtitle, title }) => {
  return (
    <footer
      className='footer'
    >
      <SectionTitle
        subtitle={subtitle}
        title={title}
      />
      <div className='footer__wrapper'>
        <ul className='footer__list'>
          <li className='footer__item'>
            <h2 className="footer__title">точки прямого доступа</h2>
          </li>
          <li className='footer__item'>
            <Link className="footer__icons-links"
              target='_blank'
              rel='noreferrer'
              to="tel:+79092876006">
              <div className="footer__icon
              footer__icon_type_tel"></div>
            </Link>
            <p className="footer__contact">tel:  <Link
              target='_blank'
              rel='noreferrer'
              to="tel:+79092876006"
              className="footer__link">+7 909 287 60 06</Link></p>
          </li>
          <li className='footer__item'>
            <Link className="footer__icons-links"
              target='_blank'
              rel='noreferrer'
              to="https://wa.me/79092876006?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B">
              <div className="footer__icon
              footer__icon_type_whatsapp"></div>
            </Link>
            <p className="footer__contact">whatsapp: <Link
              target='_blank'
              rel='noreferrer'
              to="https://wa.me/79092876006?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B"
              className="footer__link">+7 909 287 60 06</Link></p>
          </li>
          <li className='footer__item'>
            <Link className="footer__icons-links"
              target='_blank'
              rel='noreferrer'
              to="https://t.me/forgohill">
              <div className="footer__icon
              footer__icon_type_telegram"></div>
            </Link>
            <p className="footer__contact">telegram: <Link
              target='_blank'
              rel='noreferrer'
              to="https://t.me/forgohill"
              className="footer__link">@forgohill</Link></p>
          </li>
          <li className='footer__item'>
            <Link className="footer__icons-links"
              target='_blank'
              rel='noreferrer'
              to="https://icq.im/alexanderbelov">
              <div className="footer__icon
              footer__icon_type_icq"></div>
            </Link>
            <p className="footer__contact">icq: <Link
              target='_blank'
              rel='noreferrer'
              to="https://icq.im/alexanderbelov"
              className="footer__link">@alexanderbelov</Link></p>
          </li>
        </ul>
        <ul className='footer__list'>
          <li className='footer__item'>
            <h2 className="footer__title">точки социальной активности</h2>
          </li>
          <li className='footer__item'>
            <Link className="footer__icons-links"
              target='_blank'
              rel='noreferrer'
              to="https://www.instagram.com/forgohill/">
              <div className="footer__icon
              footer__icon_type_instagram"></div>
            </Link>
            <p className="footer__contact">instagram: <Link
              target='_blank'
              rel='noreferrer'
              to="https://www.instagram.com/forgohill/"
              className="footer__link">@forgohill</Link></p>
          </li>
          <li className='footer__item'>
            <Link className="footer__icons-links"
              target='_blank'
              rel='noreferrer'
              to="https://vk.com/marlo">
              <div className="footer__icon
              footer__icon_type_vkontakte"></div>
            </Link>
            <p className="footer__contact">vkontakte: <Link
              target='_blank'
              rel='noreferrer'
              to="https://vk.com/marlo"
              className="footer__link">@marlo</Link></p>
          </li>
          <li className='footer__item'>
            <Link className="footer__icons-links"
              target='_blank'
              rel='noreferrer'
              to="https://youtube.com/@quickaction3380?si=2_OLRZ9oSlKFzoHn">
              <div className="footer__icon
              footer__icon_type_youtube"></div>
            </Link>
            <p className="footer__contact">youtube: <Link
              target='_blank'
              rel='noreferrer'
              to="https://youtube.com/@quickaction3380?si=2_OLRZ9oSlKFzoHn"
              className="footer__link">lab.quick.action</Link></p>
          </li>
          <li className='footer__item'>
            <Link className="footer__icons-links"
              target='_blank'
              rel='noreferrer'
              to="https://github.com/forgohill">
              <div className="footer__icon
              footer__icon_type_github"></div>
            </Link>
            <p className="footer__contact">github: <Link
              target='_blank'
              rel='noreferrer'
              to="https://github.com/forgohill"
              className="footer__link">@forgohill</Link></p>
          </li>
        </ul>
      </div>
      <p className="footer__pharagraph">разработанно и сверстанно @forgohill | 2022-2023</p>
    </footer>
  );
}

export default Footer;
