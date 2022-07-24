import headerLogo from "../images/logo.svg";
import { useLocation, Link } from "react-router-dom";

const urls = {
  "/sign-in": "/sign-up",
  "/sign-up": "/sign-in",
};

const linkText = {
  "/sign-in": "Регистрация",
  "/sign-up": "Войти",
};

const Header = () => {
  const { pathname } = useLocation();

  const additionalLink = urls[pathname] && (
    <Link className="header__add-link" to={urls[pathname]}>
      {linkText[pathname]}
    </Link>
  );

  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" href="#" src={headerLogo} />
      {additionalLink}
    </header>
  );
};

export default Header;
