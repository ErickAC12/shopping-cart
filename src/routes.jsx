import MainPage from "./MainPage";
import ErrorPage from "./ErrorPage";
import ShopPage from "./ShopPage";

const routes = [
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/shop",
        element: <ShopPage />,
    },
];

export default routes;