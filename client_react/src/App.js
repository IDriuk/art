import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="nav-wrapper grey darken-1">
          <a routerLink="/" className="brand-logo">
            Newborn
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li routerLinkActive="active">
              <a routerLink="/login">Вход</a>
            </li>
            <li routerLinkActive="active">
              <a routerLink="/register">Регистрация</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="auth-block">

        <form className="card">
          <div className="card-content">
            <span className="card-title">Войти в систему</span>
            <div className="input-field">
              <input  id="email" type="email" />
              <label for="email">Email:</label>
              {/* <span className="helper-text red-text">
                <span>Email не должен быть пустым</span>
                <span>Введите корректный email адрес</span>
              </span> */}
            </div>
            <div className="input-field">
              <input id="password" type="password" />
              <label for="password">Пароль:</label>
              {/* <span className="helper-text red-text">
                <span>Пароль не должен быть пустым</span>
                <span>Пароль должен быть больше символов. Сейчас</span>
              </span> */}
            </div>
          </div>
          <div className="card-action">
            <button type="submit" className="modal-action btn waves-effect">
              Войти
            </button>
          </div>
        </form>

      </div>
    </>
  );
}

export default App;
