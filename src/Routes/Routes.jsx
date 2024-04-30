import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTouristSpot from "../Pages/AddTouristSpot/AddTouristSpot";
import PrivetRoute from "./PrivetRoute";
import AllSpots from "../Pages/AllSpots/AllSpots";
import SpotDetails from "../Pages/SpotDetails/SpotDetails";
import MyAddedSpotList from "../Pages/MyAddedSpotList/MyAddedSpotList";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateSpotData from "../Pages/UpdateSpotData/UpdateSpotData";
import CountrySpots from "../Pages/CountrySpots/CountrySpots";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://tropical-tours-web-server.vercel.app/spots"),
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
      {
        path: "/allSpots",
        element: <AllSpots></AllSpots>,
        loader: () =>
          fetch("https://tropical-tours-web-server.vercel.app/spots"),
      },
      {
        path: "/spotDetails/:id",
        element: (
          <PrivetRoute>
            <SpotDetails></SpotDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tropical-tours-web-server.vercel.app/spots/${params.id}`
          ),
      },
      {
        path: "/myAddedSpotList",
        element: (
          <PrivetRoute>
            <MyAddedSpotList></MyAddedSpotList>
          </PrivetRoute>
        ),
        loader: () =>
          fetch("https://tropical-tours-web-server.vercel.app/spots"),
      },
      {
        path: "/updateSpotData/:id",
        element: (
          <PrivetRoute>
            <UpdateSpotData></UpdateSpotData>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://tropical-tours-web-server.vercel.app/spots/${params.id}`
          ),
      },
      {
        path: "/countrySpots/:country_name",
        element: <CountrySpots></CountrySpots>,
      },
    ],
  },
]);
