import { RouterProvider } from "react-router-dom";
import "./App.css";
import MainNav from "./navigation/MainNav";
import Nav from "./components/NavComponents/Nav";
function App() {
  return (
    <>
      <RouterProvider router={MainNav} />
      <Nav />
    </>
  );
}

export default App;
