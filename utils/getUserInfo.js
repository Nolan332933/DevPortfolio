import { cookies } from "next/headers";

export const getUserInfo = (param) => {
  const userCookie = cookies().get("userInfo");
  const userInfo = JSON.parse(userCookie.value);
  if (param) {
    return userInfo[param];
  }
  return userInfo;
};
