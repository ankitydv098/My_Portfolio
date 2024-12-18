import React from "react";
import Navbar from "./Components/Navbar";
import Heros from "./Components/Heros";
import Projects from "./Components/Projects";
import DynamicIconCloud from "./Components/DynamicIconCloud";
import Footer from "./Components/Footer";
import Terminal from "./Components/Terminal";
import Blogs from "./Components/Blogs";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Heros />
          <Projects />
          <DynamicIconCloud />
          <Footer />
        </>
      ),
    },
    {
      path: "/terminal",
      element: (
        <>
          <Terminal />
        </>
      ),
    },
    {
      path: '/blogs',
      element: (
        <>
          <Blogs />
        </>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
