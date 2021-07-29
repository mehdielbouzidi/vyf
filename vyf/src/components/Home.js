import React, { useContext, useEffect, useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import myContext, { setFilter } from "../MyContext.js";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: 230,
    },
  },
}));

export const Home = () => {
  const classes = useStyles();
  const src = "http://192.168.30.79";
  const [state, dispatch] = useContext(myContext);
  const [redirect, setRedirect] = useState({
    table: false,
  });
  const rRef = useRef();
  rRef.current = redirect;

  // const resetRedirect = (name) => {
  //   setTimeout(() => {
  //     const newR = { ...rRef.current };
  //     newR[name] = false;
  //     setRedirect(newR);
  //   }, 0);
  // };

  useEffect(() => {
    function iframeURLChange(iframe, callback) {
      const unloadHandler = function () {
        setTimeout(function () {
          if (iframe?.contentWindow?.location?.pathname) {
            callback(iframe.contentWindow.location.pathname);
          }
        }, 0);
      };
      function attachUnload() {
        iframe.contentWindow.removeEventListener("unload", unloadHandler);
        iframe.contentWindow.addEventListener("unload", unloadHandler);
      }
      iframe.addEventListener("load", attachUnload);
      attachUnload();
    }

    iframeURLChange(document.getElementById("bos"), function (newURL) {
      if (newURL === "/bos/opleidingstype-aanmaken.flow") {
        setRedirect((prev) => ({ ...prev, table: true }));
      }
    });
  }, [window.location]);

  // useEffect(() => {
  //   dispatch(setPath("/bos/index.xhtml"));
  // }, [state]);

  if (redirect.table) {
    return <Redirect to="/aanmaken" />;
  }

  return (
    <main className={classes.content}>
      <div style={{ marginLeft: 260, marginTop: 30, width: 1100 }}>
        <iframe src={src + state.path} width="1600" height="800" title="Vyf" id="bos"></iframe>
      </div>
    </main>
  );
};
