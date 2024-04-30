import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes.jsx";
import AuthContextProvider from "./AuthContextProvider/ContextProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <HelmetProvider>
        {" "}
        <RouterProvider router={router}></RouterProvider>
      </HelmetProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
