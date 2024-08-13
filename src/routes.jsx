import App from "./App";
import HomePage from "./routes/homePage";
import ShopPage from "./routes/shop";
import ErrorPage from "./routes/errorPage";
import { action as shopAction, loader as shopLoader } from "./components/card";
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: shopLoader,
    
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "/shop",
            element: <ShopPage />,
            action: shopAction,
          },
        ],
      },
    ],
  },
];

export default routes;
