function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export default getAuthToken;

export function tokenLoader() {
  return getAuthToken();
}
