import React, { useState, createContext } from "react";
import LoginPage from "./components/loginPage/LoginPage";
import "./App.css";
import TodoPage from "./components/todoPage/TodoPage";

export const UserContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        {isAuthenticated ? <TodoPage /> : <LoginPage />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
