import { createBrowserRouter } from "react-router-dom";
import Error from "../Components/Error/Error";
import Main from "../Layout/Main";
import Home from "../Components/Home";
import SingleProfile from "../Components/singleProfile";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <SingleProfile />,
      },
    ],
  },
]);
