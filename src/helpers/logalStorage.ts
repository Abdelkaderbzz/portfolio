export const setTokenToLocalStorage = (value: string) => {
  localStorage.setItem("JWT_TOKEN", value);
};
export const setRefrechTokenToLocalStorage = (value: string) => {
  localStorage.setItem("REFRECH_TOKEN", value);
};
export const getTokenFromLocalStorage = () => {
  const JWT_TOKEN = localStorage.getItem("JWT_TOKEN");
  const token = JWT_TOKEN || null;
  return token;
};
export const getRefrechTokenFromLocalStorage = () => {
  const REFRECH_TOKEN = localStorage.getItem("REFRECH_TOKEN");
  const refrechToken = REFRECH_TOKEN || null;
  return refrechToken;
};

export const removeTokensFromLocalStorage = () => {
  localStorage.removeItem("JWT_TOKEN");
  localStorage.removeItem("REFRECH_TOKEN");
};

export const setTokensInLocalStorage = (access: string, refrech: string) => {
  setRefrechTokenToLocalStorage(refrech);
  setTokenToLocalStorage(access);
};
