import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { SideMenu } from "./SideMenu.js";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home } from "./Home.js";
import { Login } from "./Login.js";
import EnhancedTable from "./Table2.js";
import { Aanmaken } from "./Aanmaken.js";
import { Wijzigen } from "./Wijzigen.js";
import myContext, { setAuth } from "../MyContext.js";
import Header from "./Header";
import Filter from "./Filter";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Auth() {
  const [state, setContext] = useContext(myContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/auth", {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const auth = res.data.auth ? true : false;
        setContext(setAuth(auth));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        // history.push("/login");
      });
  }, []);

  if (loading) {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100vw" }}>
        <CircularProgress />
      </div>
    );
  }

  if (!state.auth) {
    return <Login />;
  }

  return (
    <main>
      <SideMenu />
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/table">
            <Filter />
            <EnhancedTable />
          </Route>
          <Route exact path="/aanmaken">
            <Aanmaken />
          </Route>
          <Route exact path="/wijzigen">
            <Wijzigen />
          </Route>
          <Route render={() => <Redirect to="/table" />} />
        </Switch>
      </div>
    </main>
  );
}
