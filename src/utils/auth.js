export const BASE_URL = "https://auth.nomoreparties.co";

export const singup = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.status === 400) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((res) => {
      return res;
    });
};
export const singin = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.status === 400 || response.status === 401) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      if (data) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    });
};

export const getUser = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  })
    .then((response) => {
      if (response.status === 400 || response.status === 401) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((data) => data);
};
