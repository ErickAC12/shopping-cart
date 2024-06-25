import MainPage from "./MainPage";
import ErrorPage from "./ErrorPage";

const routes = [
    {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
    },
];

export default routes;