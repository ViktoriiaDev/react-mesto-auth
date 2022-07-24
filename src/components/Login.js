import React from "react";

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');


  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

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
        <div className="unauth__title">Вход</div>
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
            Войти
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
