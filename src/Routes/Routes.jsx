import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../Pages/Home/Home";
import ListedBook from "../Pages/ListedBook/ListedBook";
import PagesToRead from "../Pages/PagesToRead/PagesToRead";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ReadBooks from "../components/ReadBooks";
import WishlistBooks from "../components/WishlistBooks";
import Contact from "../Pages/Contact/Contact";
import FeaturedBooks from "../Pages/FeaturedBooks/FeaturedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listedbooks",
        element: <ListedBook></ListedBook>,
        children: [
          {
            index: true,
            // path: "readbook",
            element: <ReadBooks></ReadBooks>,
          },
          {
            path: "wishlist",
            element: <WishlistBooks></WishlistBooks>,
          },
        ],
      },
      {
        path: "/pagestoread",
        element: <PagesToRead></PagesToRead>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("data.json"),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/featuredbooks",
        element: <FeaturedBooks></FeaturedBooks>,
      },
    ],
  },
]);

export default router;
