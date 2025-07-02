import "./App.css";
import Home from "./app/components/home/Home";
import { BrowserRouter, useRoutes } from "react-router-dom";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BottleAnimation from "./app/pages/BottleAnimation";
function App() {
  return (
    <div className=" text-red-900 w-full bg-[#050014] h-screen ">
      <Home />
      {/* <Hero /> */}
    </div>
  );
}

export default App;
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/flask",
    element: <BottleAnimation />,
  },
]);

function Root() {
  return <RouterProvider router={router} />;
}

export { Root };
