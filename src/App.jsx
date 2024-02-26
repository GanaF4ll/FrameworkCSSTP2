import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainNav from "./navigation/MainNav";
function App() {
  return (
    <>
      <RouterProvider router={MainNav} />
    </>
  );
}

export default App;
