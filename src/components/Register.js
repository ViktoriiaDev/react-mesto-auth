import React from "react";
import { Link } from "react-router-dom";
import InfoTooltip from "./InfoTooltip";

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isOpen, setIsOpen] = React.useState(true);

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  const closePopup = () => {
    setIsOpen(false)
  };

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   onUpdateUser({
  //     name,
  //     about: description,
  //   });
  // }
  
  return (
    <>
      <div className="unauth">
        <div className="unauth__title">Регистрация</div>
        <form className="unauth__form">
          <input
            value={email}
            onChange={handleChangeEmail}
            placeholder="Email"
            name="email"
            className="unauth__form-input"
            required
          />

          <input
            value={password}
            onChange={handleChangePassword}
            placeholder="Пароль"
            name="password"
            className="unauth__form-input"
            required
          />
          <button className="unauth__form-submit" type="submit">
            Зарегистрироваться
          </button>
           <Link to="/sign-in" className="unauth__link">Уже зарегистрированы? Войти</Link>
        </form>
      </div>
    <InfoTooltip isOpen={isOpen} isSuccess={false} onClose={closePopup}/>
    </>
  );
};

export default Register;
