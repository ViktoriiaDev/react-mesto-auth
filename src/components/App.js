import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";

import CurrentUserContext from "../contexts/CurrentUserContext.js";
import { api } from "../utils/api.js";

function App() {
  const [currentUser, setСurrentUser] = React.useState({
    name: "",
    about: "",
  });
  const [loggedIn, setLoggedIn] = React.useState(true);

  React.useEffect(() => {
    api
      .getProfileInfo()
      .then((result) => {
        setСurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />

      <Switch>
        
        <Route path="/sign-in">
          <Login />
        </Route>
        <Route path="/sign-up">
          <Register />
        </Route>
        <ProtectedRoute
          path="/"
          loggedIn={loggedIn}
          component={MainPage}
          setСurrentUser={setСurrentUser}
        />
      </Switch>

      <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
