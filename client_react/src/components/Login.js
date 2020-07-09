import React from "react";

export default function() {
  return (<div className="auth-block">

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

</div>)
}
