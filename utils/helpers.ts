import CryptoJS from "crypto-js";

const encryptData = (data: any) => {
  const secretKey = process.env.SECRET_KEY || "secretKey";
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

const decryptData = (data: string) => {
  const secretKey = process.env.SECRET_KEY || "secretKey";
  const bytes = CryptoJS.AES.decrypt(data, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

export { encryptData, decryptData };
