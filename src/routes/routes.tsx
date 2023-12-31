import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import NotFound from "@/pages/NotFound";
import Books from "@/pages/Books";
import Home from "@/pages/Home";
import BookDetails from "@/pages/BookDetails";
import AddBook from "@/pages/AddBook";
import EditBook from "@/pages/EditBook";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/books",
        element: <Books />,
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBook />,
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-book/:id",
        element: <EditBook />,
      },
      {
        path: "/book-details/:id",
        element: <BookDetails />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signUp",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
