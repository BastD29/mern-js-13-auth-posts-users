import CryptoJS from "crypto-js";

const setItem = (key, value, encrypt) => {
  if (encrypt) {
    const encryptValue = CryptoJS.AES.encrypt(value).toString();
    if (typeof window !== "undefined") localStorage.setItem(key, encryptValue);
    return encryptValue;
  }

  // The check typeof window !== "undefined" in the code is used
  // to determine whether the JavaScript code is running in a browser environment
  if (typeof window !== "undefined") localStorage.setItem(key, value);
  return value;
};

const getItem = (key, decrypt) => {
  if (decrypt) {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      return value
        ? CryptoJS.AES.decrypt(value).toString(CryptoJS.enc.Utf8)
        : undefined;
    }
  }

  return localStorage.getItem(key);
};

const removeItem = (key) => {
  if (typeof window !== "undefined") return localStorage.removeItem(key);
};

export { setItem, getItem, removeItem };
