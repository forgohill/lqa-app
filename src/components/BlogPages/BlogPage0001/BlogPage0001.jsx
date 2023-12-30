import React from 'react';
import DividingLine from '../DividingLine/DividingLine.jsx';
import './BlogPage0001.css';
import imgSonetBlogPost1 from "../../../img/blog-pages/BlogPage0001/img-sonet-blog-post1 1.webp";
import imageContainer1 from "../../../img/blog-pages/BlogPage0001/image-container-1.webp";

const BlogPage0001 = () => {

  const blogpageCodeRed = '#800';
  const blogpageCodeBlue = '#008';
  const blogpageCodeGreen = '#080';
  const backgroung0d0d0d = '#0D0D0D';
  const backgroung333 = '#333';
  const backgroung808080 = '#808080';

  return (
    <section
      className='blog-pages blog-page-0001'>
      <h1 className='blog-pages__title'>
        Типографика в сайте портфолио lab.quick.&shy;action на ширине 1440
      </h1>
      <p className="blog-pages__date">20.08.2022г</p>
      <div className="blog-pages__image-container">
        <img src={imgSonetBlogPost1} alt="Прототип сайта lab.quick.action. Скриншот Figma" />
      </div>
      <p className="blog-pages__pharagraph">
        Это первый пост блога на&nbsp;сайте lab.quick.action, в&nbsp;его я&nbsp;пишу внутри программы Figma. Цель этого поста описать правила по&nbsp;которым будет верстаться типографика в&nbsp;разделе социальный блог. Все размеры и&nbsp;отступы, которые будут присутствовать в&nbsp;этой разработке, я&nbsp;подчерпнул из&nbsp;сайта <a href="https://grtcalculator.com/" className="blog-pages__link" target='_blank'
          rel='noreferrer'>https://grtcalculator.com/</a>&nbsp;&mdash; на&nbsp;котором после указания гарнитуры формируется страница на&nbsp;которой можно увидеть как лучше всего разместить текстовые объекты на&nbsp;странице. Иерархия создаеться на&nbsp;основе правила золотого сечения.
      </p>
      <h2 className='blog-pages__title'>
        Заголовки {`<h1>,<h2>,<h3>,<h4>`}
      </h2>
      <p className="blog-pages__pharagraph">
        В&nbsp;типографике есть определенные правила по&nbsp;которым блоки информации относящиеся непосредственно друг к&nbsp;другу должны тяготеть не&nbsp;только по&nbsp;смыслу но&nbsp;и&nbsp;визуально. Чтобы организовать этот визуальный эффект в&nbsp;типографике используют иерархию не&nbsp;только заголовков но&nbsp;и&nbsp;растояний между текстовыми блоками. Правильная иерархия создаеться еще в&nbsp;момент создания прототипа сайта. Далее я&nbsp;покажу какие заголовки будут использоваться в&nbsp;разделе социальный блог:
      </p>
      <h1 className='blog-pages__title'>
        Заголовок 1 порядка
      </h1>
      <h2 className='blog-pages__title'>
        Заголовок 2 порядка
      </h2>
      <h3 className='blog-pages__title'>
        Заголовок 3 порядка
      </h3>
      <h4 className='blog-pages__title'>
        Заголовок 4 порядка
      </h4>
      <p className="blog-pages__pharagraph">
        После каждого блока {'<p>'} я буду использовать на desktop и планшетных laptop версиях отступ margin-bottom:40px.
        Далее я опишу параметры для заголовков:
      </p>
      <h3 className='blog-pages__title'>
        Заголовок 1 порядка:
      </h3>
      <ul className="blog-pages__list">
        <li className='blog-pages__item'>font-family: Roboto;</li>
        <li className='blog-pages__item'>font-size: 45px;</li>
        <li className='blog-pages__item'>font-weight: 500;</li>
        <li className='blog-pages__item'>line-height: 74px;</li>
        <li className='blog-pages__item'>letter-spacing: 0.12em;</li>
        <li className='blog-pages__item'>margin-bottom: 40px;</li>
      </ul>
      <h3 className='blog-pages__title'>
        Заголовок 2 порядка:
      </h3>
      <ul className="blog-pages__list">
        <li className='blog-pages__item'>font-family: Roboto;</li>
        <li className='blog-pages__item'>font-size: 36px;</li>
        <li className='blog-pages__item'>font-weight: 500;</li>
        <li className='blog-pages__item'>line-height: 61px;</li>
        <li className='blog-pages__item'>letter-spacing: 0.12em;</li>
        <li className='blog-pages__item'>margin-bottom: 25px;</li>
      </ul>
      <h3 className='blog-pages__title'>
        Заголовок 3 порядка:
      </h3>
      <ul className="blog-pages__list">
        <li className='blog-pages__item'>font-family: Roboto;</li>
        <li className='blog-pages__item'>font-size: 28px;</li>
        <li className='blog-pages__item'>font-weight: 500;</li>
        <li className='blog-pages__item'>line-height: 49px;</li>
        <li className='blog-pages__item'>letter-spacing: 0.12em;</li>
        <li className='blog-pages__item'>margin-bottom: 15px;</li>
      </ul>
      <h3 className='blog-pages__title'>
        Заголовок 4 порядка:
      </h3>
      <ul className="blog-pages__list">
        <li className='blog-pages__item'>font-family: Roboto;</li>
        <li className='blog-pages__item'>font-size: 22px;</li>
        <li className='blog-pages__item'>font-weight: 500;</li>
        <li className='blog-pages__item'>line-height: 40px;</li>
        <li className='blog-pages__item'>letter-spacing: 0.12em;</li>
        <li className='blog-pages__item'>margin-bottom: 0px;</li>
      </ul>
      <h2 className='blog-pages__title'>
        Цитаты {'<blockquote></blockquote>'}
      </h2>
      <p className="blog-pages__pharagraph">В&nbsp;постах блогов обычно присутвуют такие элементы как цаитаты&nbsp;&mdash; единообразие и&nbsp;одноподобность также необходимо закладывать на&nbsp;этапе проектирования сайта.</p>
      <blockquote
        className='blog-pages__blockquote'
      >
        Как принято считать, диаграммы связей могут быть описаны максимально подробно. Картельные сговоры не&nbsp;допускают ситуации, при которой акционеры крупнейших компаний объективно рассмотрены соответствующими инстанциями.
      </blockquote>
      <p className="blog-pages__pharagraph">Цитата будет находиться в&nbsp;отдельном контейнере и&nbsp;иметь отступ справа 40px, так&nbsp;же слева от&nbsp;неё будет находиться полоса толщиной в&nbsp;1px высотой с&nbsp;этот контейнер. Так&nbsp;же я&nbsp;использую для цвета шрифта осветленный серый #333&nbsp;а для полоски #808080.</p>

      <div className="blog-page-0001__circle-container">
        <div className="blog-page-0001__circle-wrapper">
          <div className="blog-page-0001__circle"
            style={{ backgroundColor: backgroung333 }}
          ></div>
          <p className="blog-page-0001__signature">#333</p>
        </div>
        <div className="blog-page-0001__circle-wrapper">
          <div className="blog-page-0001__circle"
            style={{ backgroundColor: backgroung808080 }}
          ></div>
          <p className="blog-page-0001__signature">#808080</p>
        </div>
      </div>

      <p className="blog-pages__pharagraph">Отступ после цитаты должен быть равен 40px. Так&nbsp;же как и&nbsp;отступ для обычного параграфа.</p>
      <h2 className="blog-pages__title">
        Нумерованные и ненумерованные списки {'<ul> и <ol>'}
      </h2>
      <p className="blog-pages__pharagraph">Заранее определю как будут выглядеть нумерованные и&nbsp;ненумерованные списки.</p>

      <h3 className="blog-pages__title">
        Ненумерованые списки {'<ul>'}
      </h3>
      <ul className="blog-pages__list">
        <li className='blog-pages__item'>Пункт 1 - 1 порядок</li>
        <ul className="blog-pages__list">
          <li className='blog-pages__item'>Пункт 1 - 2 порядок</li>
          <ul className="blog-pages__list">
            <li className='blog-pages__item'>Пункт 1 - 3 порядок</li>
            <li className='blog-pages__item'>Пункт 1 - 3 порядок</li>
          </ul>
          <li className='blog-pages__item'>Пункт 1 - 2 порядок</li>
        </ul>
        <li className='blog-pages__item'>Пункт 2 - 1 порядок</li>
      </ul>
      <h3 className="blog-pages__title">
        Ненумерованые списки {'<ol>'}
      </h3>
      <ol className="blog-pages__list">
        <li className='blog-pages__item'>Пункт 1 - 1 порядок</li>
        <ol className="blog-pages__list">
          <li className='blog-pages__item'>Пункт 1 - 2 порядок</li>
          <ol className="blog-pages__list">
            <li className='blog-pages__item'>Пункт 1 - 3 порядок</li>
            <li className='blog-pages__item'>Пункт 1 - 3 порядок</li>
          </ol>
          <li className='blog-pages__item'>Пункт 1 - 2 порядок</li>
        </ol>
        <li className='blog-pages__item'>Пункт 2 - 1 порядок</li>
      </ol>
      <p className="blog-pages__pharagraph">
        Отступы снизу так&nbsp;же как и&nbsp;у&nbsp;параграфы будут равны 40px. Цветовую схему будем использовать аналогичную типографики цитаты. Цвета шрифта осветленный серый #333333, а&nbsp;для полоски #808080. Образец выше.
      </p>
      <p className="blog-pages__pharagraph">
        Сами списки будут представлять из&nbsp;себя обычные списки, но&nbsp;с&nbsp;большей разрядкой между строк, 15px. Так&nbsp;же с&nbsp;лева от&nbsp;нее будет находиться полоска толщиной в&nbsp;1px и&nbsp;высотой блока списка. Отступ от&nbsp;края блока у&nbsp;списка первого порядка будет равет 39~40px, и&nbsp;у&nbsp;элементов второго порядка 79~80px.
      </p>

      <h2 className="blog-pages__title">
        Разделительная полоса
      </h2>
      <p className="blog-pages__pharagraph">
        На&nbsp;стартовой странице будет последний пост из&nbsp;блога. Далее кликнув на&nbsp;заголовок социальный блог можно будет перейти на&nbsp;страницу где будет превью 5&nbsp;последних постов. 1-5 последних постов будут представлять собой список из&nbsp;укороченых версий с&nbsp;ключевой мыслю или описанием сути внутри поста. Снизу будет количество страниц-списков. Нумерация будет кликабельна и&nbsp;иметь обратную последовательность.
      </p>
      <p className="blog-pages__pharagraph">
        Посты на&nbsp;этой страние-списке будут разделены полосой.
      </p>
      <DividingLine />
      <p className="blog-pages__pharagraph">
        Полоса будет представлять из&nbsp;себя блок толщиной в&nbsp;1px&nbsp;&mdash; залитый цветом #0d0d0d.
      </p>
      <div className="blog-page-0001__circle-container">
        <div className="blog-page-0001__circle-wrapper">
          <div className="blog-page-0001__circle"
            style={{ backgroundColor: backgroung0d0d0d }}
          ></div>
          <p className="blog-page-0001__signature">#0d0d0d</p>
        </div>
      </div>
      <p className="blog-pages__pharagraph">
        Отступ сверху и&nbsp;снизу будет равен 80px.
      </p>
      <h2 className="blog-pages__title">
        Код
      </h2>
      <p className="blog-pages__pharagraph">
        Так как моя цель уметь использовать для начала HTML, CSS и&nbsp;JavaScript: в&nbsp;блоге обязан присутствовать стиль для отображения кода. Да&nbsp;и&nbsp;сама цель ведения этого блога это самообучение и&nbsp;внедрение практик применения тех или иных как способов верстки. Блог&nbsp;&mdash; покажет мои практические навыки.</p>
      <p className="blog-pages__pharagraph">
        К&nbsp;отображению кода у&nbsp;меня возникли вопросы&nbsp;&mdash; изначально я&nbsp;думал что отобразить его минималистично, было&nbsp;бы интересно. В&nbsp;итоге я&nbsp;пришел к&nbsp;выводу что разными цветами можно показать элементы внутри. Как итог стартовая палитра будет стостоять из&nbsp;трех цветов. Red #880000 Blue #000088 Green #008800.</p>

      <div className="blog-page-0001__circle-container">
        <div className="blog-page-0001__circle-wrapper">
          <div className="blog-page-0001__circle"
            style={{ backgroundColor: blogpageCodeRed }}
          ></div>
          <p className="blog-page-0001__signature">#880000</p>
        </div>
        <div className="blog-page-0001__circle-wrapper">
          <div className="blog-page-0001__circle"
            style={{ backgroundColor: blogpageCodeBlue }}
          ></div>
          <p className="blog-page-0001__signature">#008800</p>
        </div>
        <div className="blog-page-0001__circle-wrapper">
          <div className="blog-page-0001__circle"
            style={{ backgroundColor: blogpageCodeGreen }}
          ></div>
          <p className="blog-page-0001__signature">#000088</p>
        </div>
      </div>
      <pre
        className='blog-pages__preview'>
        <code
          className='blog-pages__code'
        >
          {`<section class="footer">
      <div class="wrapper-footer">
          <div class="container-footer">
              <div class="footer-menu-1">
                  <h1 class="logo-Desktop-42-FA">ArchiWeb</h1>
                  <p class="p-footerMenu-1 footerMenu-desktop-17_29_6">Archiweb
                   is an architectural consultant based in Berlin, Germany.
                    We provide solutions for your architecture and residential design
                  </p>
                  <div class="wrapper-socialLogo-footer">
                      <a href="" class="logoFooter-1"></a>
                      <a href="" class="logoFooter-2"></a>
                      <a href="" class="logoFooter-3"></a>
                  </div>
              </div>

      /* СЕКЦИЯ 1 */
      .section-1 {
          max-width: 1680px;
      }
      .wrapper-s1 {
          display: flex;
          justify-items: center;
          align-items: center;

      }

      .contentContainer-s1 {
          position: relative;
          width: 100%;
          /* max-width: 1680px; */
          height: 927px;
      }`}
        </code>
      </pre>
      <p className="blog-pages__pharagraph">
        Шрифт для представления кода будет использован: Source Code от&nbsp;компании Adobe.
      </p>

      <ul className="blog-pages__list">
        <li className='blog-pages__item'>font-family: Source Code Variable;</li>
        <li className='blog-pages__item'>font-size: 22px;</li>
        <li className='blog-pages__item'>font-weight: 400;</li>
        <li className='blog-pages__item'>line-height: 40px;</li>
        <li className='blog-pages__item'>letter-spacing: 0em;</li>
        <li className='blog-pages__item'>margin-bottom: 40px;</li>
      </ul>
      <h2 className="blog-pages__title">
        Быстрые клавиши {'<kbd>'}
      </h2>
      <p className="blog-pages__pharagraph">
        При написании блога в&nbsp;некоторых постах возможно появление использования быстрых клавиш. Для их&nbsp;визуализации я&nbsp;напишу стиль&nbsp;&mdash; не&nbsp;факт что он&nbsp;мне понадобиться, но&nbsp;это будет хороший опыт. Ниже приведены примеры стилизации быстрых клавиш. Они будут сделаны из&nbsp;flex-box с&nbsp;автоматическими падингами в&nbsp;5&nbsp;px.
      </p>

      <p className="blog-pages__pharagraph">
        Сохранить
      </p>
      <p className="blog-pages__pharagraph">
        Mac: <kbd className='blog-pages__kbd'>command</kbd> + <kbd className='blog-pages__kbd'>s</kbd>
      </p>
      <p className="blog-pages__pharagraph">
        Win: <kbd className='blog-pages__kbd'>cntrl</kbd> + <kbd className='blog-pages__kbd'>s</kbd>
      </p>

      <p className="blog-pages__pharagraph">
        Найти
      </p>
      <p className="blog-pages__pharagraph">
        Mac: <kbd className='blog-pages__kbd'>command</kbd> + <kbd className='blog-pages__kbd'>f</kbd>
      </p>
      <p className="blog-pages__pharagraph">
        Win: <kbd className='blog-pages__kbd'>cntrl</kbd> + <kbd className='blog-pages__kbd'>f</kbd>
      </p>

      <p className="blog-pages__pharagraph">
        Сохранить как
      </p>
      <p className="blog-pages__pharagraph">
        Mac: <kbd className='blog-pages__kbd'>command</kbd> + <kbd className='blog-pages__kbd'>option</kbd> + <kbd className='blog-pages__kbd'>s</kbd>
      </p>
      <p className="blog-pages__pharagraph">
        Win: <kbd className='blog-pages__kbd'>cntrl</kbd> + <kbd className='blog-pages__kbd'>shift</kbd> + <kbd className='blog-pages__kbd'>s</kbd>
      </p>

      <h2 className="blog-pages__title">
        Параграф с акцентом и смещенным акцентом
      </h2>
      <p className="blog-pages__pharagraph">
        Так&nbsp;же в&nbsp;некоторых постах необходимы будут блоки текста на&nbsp;которых надо будет сделать акцент. Для этого я&nbsp;создам 2&nbsp;стиля с&nbsp;серым выделением и&nbsp;обратным&nbsp;&mdash; смещеным акцентом. Задний фон будет черный а&nbsp;шрифт серый.
      </p>
      <p className="blog-pages__pharagraph blog-pages__pharagraph_accent_gray">
        Для придания большего равновесия необходимо выставить отступы: сверху 24px и&nbsp;снизу 24px. Для того что&nbsp;бы визуально еще более выделить этот текстовы блок&nbsp;&mdash; по&nbsp;краям я&nbsp;сделаю отступы в&nbsp;40px. Это выделит такой параграф из&nbsp;обещего потока текста.
      </p>
      <p className="blog-pages__pharagraph blog-pages__pharagraph_accent_black">
        Для придания большего равновесия необходимо выставить отступы: сверху 24px и&nbsp;снизу 24px. Для того что&nbsp;бы визуально еще более выделить этот текстовы блок&nbsp;&mdash; по&nbsp;краям я&nbsp;сделаю отступы в&nbsp;40px. Это выделит такой параграф из&nbsp;обещего потока текста.
      </p>

      <h2 className="blog-pages__title">
        Размещение изображений
      </h2>
      <p className="blog-pages__pharagraph">
        Изображения в&nbsp;блоге должны распологаться по&nbsp;центру. Они могут быть как горизонтально ориентированны так и&nbsp;вертикально ориентированны. В&nbsp;ширину они не&nbsp;должны быть шире 7&nbsp;колонок 12&nbsp;колончатой странцы.
      </p>
      <div className="blog-pages__image-container">
        <img src={imageContainer1} alt="Пример тега img" />
      </div>
      <p className="blog-pages__pharagraph">
        При уменьшении страницы изображения должны пропорционально уменьшаться до&nbsp;тех пор пока не&nbsp;упруться в&nbsp;края экрана и&nbsp;не&nbsp;займут минимальную ширину в&nbsp;375px.
      </p>

      <h2 className="blog-pages__title">
        Параграф {'<p>'}
      </h2>
      <p className="blog-pages__pharagraph">
        Параграф&nbsp;&mdash; стартовая единица типографики. От&nbsp;параметров параграфа строиться вся иерархия в&nbsp;типографики. В&nbsp;своём блоге я&nbsp;буду использовать гарнитуру Roboto с&nbsp;толщиной 400. Это говорит о&nbsp;том что единицу параграфа я&nbsp;буду использовать с&nbsp;параметром Regular.
      </p>
      <ul className="blog-pages__list">
        <li className='blog-pages__item'>font-family: Roboto;</li>
        <li className='blog-pages__item'>font-size: 22px;</li>
        <li className='blog-pages__item'>font-weight: 400;</li>
        <li className='blog-pages__item'>line-height: 40px;</li>
        <li className='blog-pages__item'>letter-spacing: 0em;</li>
        <li className='blog-pages__item'>margin-bottom: 40px;</li>
      </ul>
      <p className="blog-pages__pharagraph">
        Цвет параграфа #0d0d0d. Отступы снизу 40px.
      </p>
      <div className="blog-pages__teg-container">
        <h2 className="blog-pages__title blog-pages__title_type_tegs">Теги</h2>
        <p className="blog-pages__pharagraph blog-pages__pharagraph_accent_tegs">#типографика #html #css #разработка #forgohill #lab.quick.action #marlo #обучение</p>
      </div>
    </section>

  );
}

export default BlogPage0001;
