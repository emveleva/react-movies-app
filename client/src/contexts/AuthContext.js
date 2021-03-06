import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

export const useAuth = () => {
 useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    _id: "",
    username: "",
  });

  return (
    <AuthContext.Provider value={[user, setUser]}>
      {children}
    </AuthContext.Provider>
  );
}
