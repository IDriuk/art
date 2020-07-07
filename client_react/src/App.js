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

      <div className="auth-block">{/* <router-outlet></router-outlet> */}</div>
    </>
  );
}

export default App;
