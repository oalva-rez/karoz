import React, { useState, useContext } from "react";
const UserInfoContext = React.createContext();

export const useUserInfoContext = () => useContext(UserInfoContext);

export default function UserInfoProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    uId: null,
    displayName: null,
    email: null,
    photoURL: null,
  });
  return (
    <UserInfoContext.Provider value={[userInfo, setUserInfo]}>
      {children}
    </UserInfoContext.Provider>
  );
}
