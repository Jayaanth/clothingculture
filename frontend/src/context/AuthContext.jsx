import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const AuthContext =
  createContext();

export function AuthProvider({
  children
}) {

  const [token,
    setToken] =
    useState(
      localStorage.getItem(
        "token"
      )
    );

  const [isAuthenticated,
    setIsAuthenticated] =
    useState(
      !!localStorage.getItem(
        "token"
      )
    );

  const [loading,
    setLoading] =
    useState(true);

  useEffect(() => {

    const storedToken =
      localStorage.getItem(
        "token"
      );

    if (storedToken) {

      setToken(
        storedToken
      );

      setIsAuthenticated(
        true
      );

    }

    setLoading(false);

  }, []);

  const login = (
    jwtToken
  ) => {

    localStorage.setItem(
      "token",
      jwtToken
    );

    setToken(
      jwtToken
    );

    setIsAuthenticated(
      true
    );

  };

  const logout = () => {

    localStorage.removeItem(
      "token"
    );

    setToken(null);

    setIsAuthenticated(
      false
    );

  };

  return (

    <AuthContext.Provider
      value={{

        token,

        login,

        logout,

        loading,

        isAuthenticated

      }}
    >

      {children}

    </AuthContext.Provider>

  );

}

export function useAuth() {

  return useContext(
    AuthContext
  );

}