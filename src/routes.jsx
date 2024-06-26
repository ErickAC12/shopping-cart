import MainPage from "./MainPage";
import ErrorPage from "./ErrorPage";
import ShopPage from "./ShopPage";
import WomensClothingPage from "./WomensClothingPage";
import MensClothingPage from "./MensClothingPage";
import JeweleryPage from "./JeweleryPage";
import ElectronicsPage from "./ElectronicsPage";

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
    {
        path: "/shop/womens-clothing",
        element: <WomensClothingPage />,
    },
    {
        path: "/shop/mens-clothing",
        element: <MensClothingPage />,
    },
    {
        path: "/shop/jewelery",
        element: <JeweleryPage />,
    },
    {
        path: "/shop/electronics",
        element: <ElectronicsPage />,
    },
];

export default routes;