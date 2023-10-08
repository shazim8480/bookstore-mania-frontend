import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import NotFound from "@/pages/NotFound";
import Books from "@/pages/Books";
import Home from "@/pages/Home";
import BookDetails from "@/pages/BookDetails";
import AddBook from "@/pages/AddBook";

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
        path: "/book-details",
        element: <BookDetails />,
      },
      {
        path: "/add-book",
        element: <AddBook />,
      },
      // {
      //   path: "/Book-details/:id",
      //   element: <BookDetails />,
      // },
    ],
  },

  // {
  //   path: "/login",
  //   element: <Login />,
  // },

  // {
  //   path: "/signup",
  //   element: <Signup />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
