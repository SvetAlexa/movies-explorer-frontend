# Проект Movies Explorer (фронтенд часть)

## Цель проекта
Дипломный проект курса ***Яндекс Практикум*** по профессии веб-разработчик  
Фронтенд часть для приложения `Movies Explorer`  

## О проекте
Приложение состоит из нескольких страниц:  
* Главная. Содержит информацию о выполненном проекте  
* Страница с фильмами. На ней есть форма поиска фильмов и блок с результатами поиска  
* Страница с сохранёнными фильмами. Показывает фильмы, сохранённые пользователем  
* Страница регистрации. Позволяет пользователю зарегистрировать аккаунт  
* Страница авторизации. На ней пользователь может войти в систему  
* Страница редактирования профиля. Пользователь может изменить данные своего аккаунта

В проекте используются два API:
* API для аутентификации пользователей и сохранения фильмов  
  Репозиторий с бэкенд-частью можно посмотреть по ссылке [Movies Explorer Backend](https://github.com/SvetAlexa/movies-explorer-api)
* Сторонний API c фильмами для поиска по ключевым словам [BeatfilmMoviesApi](https://api.nomoreparties.co/beatfilm-movies)

## Функционал
* Проект создан через ***CRA (Create React Component)***
* HTML разметка портирована в JSX
* Использованы функциональные компоненты
* Реализованы асинхронные запросы к API
* Проработаны авторизованные и неавторизованные состояния, сохранение фильмов в профиле
* Полученные фильмы фильтруются на стороне клиента
* Валидация форм  
* Реализована аутентификация пользователя с помощью cookie
* Настроена работа с LocalStorage для восстановления результатов предыдущего поиска на странице всех фильмов
* По результатам поиска на странице отображается фиксированное количество фильмов, оставшиеся результаты поиска появляются по нажатию кнопки "Ещё"  
* Проект адаптирован для мобильных устройств  

## Технологии
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-original.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original-wordmark.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/css3/css3-original-wordmark.svg"  title="CSS3" alt="CSS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/figma/figma-original.svg" title="Figma" alt="Figma " width="40" height="40"/>&nbsp;
  <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" width="40" height="40" alt="Postman"/>
</div>

## Ссылки
**Ссылка на домен фронтенда** https://movies-diploma.nomoredomainsrocks.ru/  
**Ссылка на домен сервера** https://api.movies-diploma.nomoredomainsrocks.ru/

## Запуск проекта
* `git clone git@github.com:SvetAlexa/movies-explorer-frontend.git` склонировать репозиторий или скачать zip-архив
* `cd movies-explorer-frontend` — перейти в папку проекта
* `npm ci` — установить зависимости  
* `npm run build` — запустить сборку    
* `npm run start` — запустить приложение
