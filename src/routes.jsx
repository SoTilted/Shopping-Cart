import App from "./App";
import HomePage from "./routes/homePage";
import ShopPage from "./routes/shop";
import ErrorPage from "./routes/errorPage";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "/shop",
            element: <ShopPage />,
          },
        ],
      },
    ],
  },
];

export default routes;
