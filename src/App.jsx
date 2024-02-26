import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import DrawerComponent from "./components/drawerComponent/DrawerComponent";
import MainNav from "./navigation/MainNav";
import { useState } from "react";
function App() {
  const [slideInDrawer, setSlideInDrawer] = useState(false);
  return (
    <>
      <DrawerComponent />
      <RouterProvider router={MainNav} />
    </>
  );
}

export default App;
