import React from 'react';
import './BlogPage0002.css';

const BlogPage0002 = () => {
  return (
    <section className='blog-pages blog-page-0002'>
      <h1 className='blog-pages__title'>
        Первое касание с TypeScript, создание Todolist по видеоуроку.
      </h1>
      <p className="blog-pages__date">28.12.2023г</p>
      <p className="blog-pages__pharagraph">
        Начало декабря 2023г. самое время начать изучать TS. Состою в телеграм группе от Яндекс.Практикума и там есть чат — Книжный клуб. Там на данный момент идет разбор книги «Эффективный TypeScript: 62 способа улучшить код».
      </p>
      <p className="blog-pages__pharagraph">
        Первые 5 глав дали понять насколько неэффективно можно изучать TS при только при помощи этой книги. Но те вебинары которые проводят ребята в чате помогают раскрыть ту суть которую пытался запрятать туда автор.
      </p>
      <p className="blog-pages__pharagraph">
        На 6й главе пришло понимания что нет ничего более неэффективного как просто читать книгу. Надо делать проекты к тому же пора знакомиться и с технологией SASS.
      </p>

      <p className="blog-pages__pharagraph">
        Для первого знакомства с TS я забил в YouTube "проект TS React" и выбрал достаточно свежее видео:
      </p>

      <div className='blog-pages__ifarme-video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/v8i-cv9NUV0?si=NFDPAjqP9oLNsQxv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <p className="blog-pages__pharagraph">
        На прохождение урока ушло чуть меньше 2х часов. Гораздо дольше я писал затем стили и оформлял README.MD для GitHub.
      </p>
      <p className="blog-pages__pharagraph">
        Итак первые мои выводы после первого знаокмство c TS : «У нас должен быть какой-то план и мы должны его придерживаться».
      </p>
      <p className="blog-pages__pharagraph">
        <a href="https://github.com/forgohill/react-ts-project-todolist" className="blog-pages__link" target='_blank'
          rel='noreferrer'>Ссылка на репозиторий</a> | <a href="https://forgohill.github.io/react-ts-project-todolist/" className="blog-pages__link" target='_blank'
            rel='noreferrer'>Ссылка на GH-Page</a>
      </p>

      <div className="blog-pages__teg-container">
        <h2 className="blog-pages__title blog-pages__title_type_tegs">Теги</h2>
        <p className="blog-pages__pharagraph blog-pages__pharagraph_accent_tegs">#TypeScript #html #SASS #разработка #forgohill #lab.quick.action #marlo #обучение</p>
      </div>
    </section>
  );
}

export default BlogPage0002;
