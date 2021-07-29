import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { nlNL } from "@material-ui/core/locale";

const theme = createMuiTheme(
  {
    palette: {
      primary: {
        main: "#9EBAB3",
        contrastText: "#fff",
      },
      secondary: {
        main: "#BA6259",
      },
      text: {
        main: "#2F4858",
      },
    },
  },
  nlNL
);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
reportWebVitals();
