import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import AllReview from "../../Pages/Review/AllReview/AllReview";
import MyReview from "../../Pages/Review/MyReview/MyReview";
import UpdateReview from "../../Pages/Review/MyReview/UpdateReview/UpdateReview";
import AddService from "../../Pages/Services/AddService";
import Services from "../../Pages/Services/Services";
import TakeReview from "../../Pages/TakeReview/TakeReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/services/:id",
        element: <TakeReview></TakeReview>,
        loader: ({ params }) =>
          fetch(
            `https://incredible-trip-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/allreview",
        element: <AllReview></AllReview>,
      },
      {
        path: "/myreview",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: "/updatereview",
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);