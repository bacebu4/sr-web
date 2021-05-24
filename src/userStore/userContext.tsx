import React, { useMemo, useState } from "react";

export const UserContext = React.createContext<{
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}>({ token: "", setToken: () => {} });

/**
 * UserInfo context. Username, roomId and error can be used in every component.
 * @param {React.ReactNode} {children}
 */
export const UserContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState("");

  const userContextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token, setToken]
  );

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
