import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Challanges from "./components/Challanges";
import SingleChallenge from "./components/SingleChallenge";
import Login from "./components/Login";
import Register from "./components/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Challanges />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/:id",
    element: <SingleChallenge />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
