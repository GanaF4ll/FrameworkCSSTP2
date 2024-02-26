import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Pourboire from "../pages/pourboire/Pourboire";

const MainNav = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pourboire",
    element: <Pourboire />,
  },
]);

export default MainNav;
