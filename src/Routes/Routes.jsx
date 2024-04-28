import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=>fetch("http://localhost:5000/spots"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/addToristSpot",
        element: (
          <PrivetRoute>
            <AddTouristSpot></AddTouristSpot>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
