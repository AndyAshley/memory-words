import Words from "../pages/Words";
import Math from "../pages/Math";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import RootLayout from "../components/RootLayout/RootLayout";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <PageNotFound />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/words",
        element: <Words />,
        errorElement: <PageNotFound />,
      },
      {
        path: "/math",
        element: <Math />,
        errorElement: <PageNotFound />,
      },
    ],
  },
];
