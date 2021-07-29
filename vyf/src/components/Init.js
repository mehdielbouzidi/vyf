// import React, { useEffect, useState, useRef } from "react";
// import { Redirect } from "react-router-dom";

// export const Init = () => {
//   // write redirects here
//   const [redirect, setRedirect] = useState({
//     table: false,
//   });
//   const rRef = useRef();
//   rRef.current = redirect;

//   const resetRedirect = (name) => {
//     setTimeout(() => {
//       const newR = { ...rRef.current };
//       newR[name] = false;
//       setRedirect(newR);
//     }, 0);
//   };

//   // init use effect, add e-listeners here to avoid momery overflowX
//   useEffect(() => {
//     function iframeURLChange(iframe, callback) {
//       //   if (!window.location.pathname.includes("/home")) return;
//       const unloadHandler = function () {
//         setTimeout(function () {
//           if (iframe?.contentWindow?.location?.pathname) {
//             callback(iframe.contentWindow.location.pathname);
//           }
//         }, 0);
//       };
//       function attachUnload() {
//         iframe.contentWindow.removeEventListener("unload", unloadHandler);
//         iframe.contentWindow.addEventListener("unload", unloadHandler);
//       }
//       iframe.addEventListener("load", attachUnload);
//       attachUnload();
//     }

//     console.log("yruroening");
//     iframeURLChange(document.getElementById("bos"), function (newURL) {
//       if (newURL == "/bos/opleidingstype-aanmaken.flow") {
//         setRedirect((prev) => ({ ...prev, table: true }));
//       }
//     });
//   }, [window.location]);

//   console.log(redirect);

//   if (redirect.table) {
//     resetRedirect("table");
//     return <Redirect to="/table" />;

//     /// material 3 buttons
//   }
//   return null;
// };
