import React from "react";
import "./styles/globals.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { MyContextProvider } from "../src/MyContext.js";
import Auth from "./components/Auth";

function App() {
  return (
    <MyContextProvider>
      <Router>
        <Auth />
      </Router>
    </MyContextProvider>
  );
}

export default App;
