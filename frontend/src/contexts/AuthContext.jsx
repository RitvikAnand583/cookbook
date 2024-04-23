import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  name: null,
  userid: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        userid: action.payload.userid,
        name: action.payload.name,
        isAuthenticated: true,
      };
    case "logout":
      return {
        ...state,
        userid: null,
        name: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("Unknown action");
  }
}

const FAKE_USER = {
  name: "Jai",
  userid: "jai18",
  password: "12345",
};

function AuthProvider({ children }) {
  const [{ name, userid, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password)
      dispatch({ type: "login", payload: FAKE_USER });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ name, userid, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Auth Context used outside scope");

  return context;
}

export { useAuth, AuthProvider };
