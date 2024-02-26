import { useState } from "react";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import DrawerComponent from "./components/drawerComponent/DrawerComponent";
import MainNav from "./navigation/MainNav";
import { store } from "./redux/store";
function App() {
  const [slideInDrawer, setSlideInDrawer] = useState(false);
  return (
    <>
      <Provider store={store}>
        <DrawerComponent
          slideInDrawer={slideInDrawer}
          setSlideInDrawer={setSlideInDrawer}
        />
        <RouterProvider router={MainNav} />
      </Provider>
    </>
  );
}

export default App;
