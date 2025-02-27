import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "./context";


ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
      <React.StrictMode>
        <BrowserRouter>
           <Root />
         </BrowserRouter>
      </React.StrictMode>
    </ContextProvider>
);
