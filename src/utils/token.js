var token;
var user;

export function setToken(tokenString) {
  token = tokenString;
  localStorage.setItem("token", JSON.stringify(token));
}
export function setUser(user) {
  user = user;
  localStorage.setItem("user", JSON.stringify(user));
}

export function getToken() {
  if (!token) {
    token = JSON.parse(localStorage.getItem("token"));
  }

  return token;
}

export function removeToken() {
  token = "";
  localStorage.removeItem("token");
}
export function removeUser() {
  user = "";
  localStorage.removeItem("user");
}
